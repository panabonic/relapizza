<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request) {
        return Order::all();
    }

    public function store(Request $request) {
        $params = $request->input();
        $order = new Order([
            'customer_name' => $params['name'],
            'customer_email' => $params['email'],
            'delivery_address' => $params['address'],
            'total_price' => $params['total']
        ]);
        $order->save();
        return $params;

        /*
        $params = $request->validated();
        $params['total_price'] = 0;
        foreach ($params['products'] as $product_id => $count) {
            $params['total_price'] += Product::find($product_id)->price * $count;
        }
        $order = new Order($params);
        $order->save();
        */
    }
}
