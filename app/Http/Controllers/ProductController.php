<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Requests\ProductRequest;


class ProductController extends Controller
{
    public function index() {
        return Product::all();
    }

    public function show(Product $product) {
        return $product;
    }

    public function create() {
        //
    }

    public function store(ProductRequest $request) {
        return Product::create($request->validated());
    }

    public function edit(Product $product) {
        //
    }

    public function update(ProductRequest $request, Product $product) {
        return $product->update($request->validated());
    }

    public function delete(Product $product) {
        $product->delete();
        return response([], 200);
    }

}
