<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Builder;

class Order extends Model
{
    protected $table = 'orders';

    protected $fillable = [
        'name', 'email', 'address', 'delivery_price', 'total', 'currency'
    ];


    public static function loadAll(): Paginator {
        return static::latest()->paginate();
    }

    public static function loadAllMine(int $user_id): Paginator {
        return static::latest()->mine($user_id)->paginate();
    }

    public function scopeMine(Builder $query, int $user_id): Builder {
        return $query->where('user_id', $user_id);
    }


    public function user() {
        return $this->belongsTo(User::class);
    }

    public function cartItems() {
        return $this->hasMany(CartItem::class);
    }


}
