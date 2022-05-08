<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Post extends Model
{
    protected $fillable = [
        'title',
        'content',
        'cover',
        'slug',
        'category_id'
    ];

    public static function getSlug( $title ){

        $slug = Str::slug( $title );

        $slug_base = $slug;

        $post_present = Post::where('slug', $slug)->first();

        $counter = 1;

        while( $post_present ) {

            $slug = $slug_base . '-' . $counter;
            
            $counter++;
            $post_present = Post::where('slug', $slug)->first();
            
        };
        return $slug;
    }
    

    // aggiungiamo relazione con model category
    public function category(){
        return $this->belongsTo('App\Category');
    }

    public function tags(){
        return $this->belongsToMany('App\Tag');
    }
}
