<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\CartItem;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index(Request $request) {
        $result = [];
        if ($user = $request->user()) {
            $builder = Order::with(['cartItems', 'user']);
            $builder->where('user_id', $user->id);
            $result = $builder->get();
        }
        return $result;
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
        if ($user = Auth::guard('api')->user()) $user->orders()->save($order);

        return $request->input();
    }




}
