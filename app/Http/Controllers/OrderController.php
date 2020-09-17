<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request) {
        $builder = Order::with(['cartItems', 'user']);
        if ($user = $request->user()) $builder->where('user_id', $user->id);
        return $builder->get();
    }

    public function store(OrderRequest $request) {
        $props = $request->validated();
        $order = new Order($props);
        $order->save();
        foreach ($props['cartItems'] as $k => $item) {
            $cartItem = new CartItem([
                'product_id' => $item['id'],
                'title' => $item['title'],
                'price' => $item['price'],
                'count' => $item['count']
            ]);
            $order->cartItems()->save($cartItem);
        }
        return $request->input();
    }




}
