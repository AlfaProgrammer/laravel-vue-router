<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use App\Category;
use App\Tag;
use Illuminate\Support\Str;
use App\Mail\SendPostDeletedMail; 
use Illuminate\Support\Facades\Mail;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() 
    {   
        // aggiunto join (edger loading)
        $userPosts = Post::with(['category','tags'])->orderBy('created_at', 'desc')->paginate(10);
        return view('admin.posts.index', compact('userPosts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        return view('admin.posts.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|min:5|max:150',
            'content' => 'nullable|min:10',
            'cover' => 'nullable',
            'category_id'=> 'exists:categories,id|nullable' // cerchiamo corrispondeza di category_id(f-key) nella tabella categories
        ]);
        

        $data = $request->all();
        $newPost = new Post();

        $slug = Post::getSlug( $data['title'] );
               
        $newPost->fill($data); //abbiamo aggiunto anche category_id al fillable
        $newPost->slug = $slug;


        $newPost->save();        

        return redirect()->route('admin.posts.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        $categories = Category::all();
        $tags = Tag::all();
        return view('admin.posts.edit', compact('post', 'categories', 'tags'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        // dd($request->all());
        $request->validate([
            'title' => 'required|min:5|max:150',
            'content' => 'nullable|min:10',
            'cover' => 'nullable',
            'category_id'=> 'exists:categories,id|nullable',
            'tags.*' => 'exists:tags,id'

        ]);

        $data = $request->all();

        // dd($data);

        if($post->title != $data['title']){
            $slug = Post::getSlug($data['title']);
            $data['slug'] = $slug;
        }

        if( array_key_exists('tags', $data) ){
            // dd($data['tags']);
            $post->tags()->sync($data['tags']);
        } else {
            // dd('non ci sono tag');
            // $post->tags()->sync([]); //si poteva benissimo fare anche cosi
            $post->tags()->detach();
        }
        
        $post->update($data);
        return redirect()->route('admin.posts.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();

        Mail::to('info@boolpress.com')->send( new SendPostDeletedMail( $post ) );

        return redirect()->route('admin.posts.index');
    }
}
