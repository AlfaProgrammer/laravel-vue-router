<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            'Antipasti', 'Primi', 'Secondi', 'Dolci', 'Contorni'
        ];

        foreach($categories as $name){

            $category = new Category();
            $category->name = $name;
            $category->slug = Str::slug($name);

            $category->save();
        };
    }
}
