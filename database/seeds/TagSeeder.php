<?php

use Illuminate\Database\Seeder;
use App\Tag;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


class TagSeeder extends Seeder
{ 
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $tags = ['care', 'dolci', 'caramelle', 'torte', 'pasticceria'];

        foreach ($tags as $index => $tag) {
             $newTag = new Tag();

             $newTag->name = $tag;
             $newTag->slug = Str::slug($newTag->name);

             $newTag->save();
        }

    }
}
