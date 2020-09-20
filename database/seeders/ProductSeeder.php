<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'title' => 'Arriva',
                'image' => '/images/pizza/arriva.jpg'
            ],
            [
                'title' => 'Cheese and chicken',
                'image' => '/images/pizza/cheese_and_chicken.jpg'
            ],
            [
                'title' => 'Cheeseburger',
                'image' => '/images/pizza/cheeseburger.jpg'
            ],
            [
                'title' => 'Chicken barbecue',
                'image' => '/images/pizza/chicken_barbecue.jpg'
            ],
            [
                'title' => 'Don bacon',
                'image' => '/images/pizza/don_bacon.jpg'
            ],
            [
                'title' => 'Double pepperoni',
                'image' => '/images/pizza/double_pepperoni.jpg'
            ],
            [
                'title' => 'Four cheeses',
                'image' => '/images/pizza/four_cheese.jpg'
            ],
            [
                'title' => 'Four seasons',
                'image' => '/images/pizza/four_seasons.jpg'
            ],
            [
                'title' => 'Ham and mushrooms',
                'image' => '/images/pizza/ham_and_mushrooms.jpg'
            ],
            [
                'title' => 'The Hawaiian',
                'image' => '/images/pizza/hawaian.jpg'
            ],
            [
                'title' => 'The Italian',
                'image' => '/images/pizza/italian.jpg'
            ],
            [
                'title' => 'Meat pizza',
                'image' => '/images/pizza/meat.jpg'
            ],
            [
                'title' => 'Mexican pizza',
                'image' => '/images/pizza/mexican.jpg'
            ],
            [
                'title' => 'Pepperoni',
                'image' => '/images/pizza/pepperoni.jpg'
            ],
            [
                'title' => 'Pizza pie',
                'image' => '/images/pizza/pizza_pie.jpg'
            ],
            [
                'title' => 'Super meat pizza',
                'image' => '/images/pizza/supermeat.jpg'
            ],
            [
                'title' => 'Vegetables and mushrooms',
                'image' => '/images/pizza/vegetables_and_mushrooms.jpg'
            ],
        ];

        foreach ($products as $data) {
            $product = Product::factory()->create();
            $product['title'] = $data['title'];
            $product['image'] = $data['image'];
            $product->save();
        }
    }
}
