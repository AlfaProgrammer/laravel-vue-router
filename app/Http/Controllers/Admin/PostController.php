<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use App\Category;
use Illuminate\Support\Str;

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
        return view('admin.posts.edit', compact('post', 'categories'));
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
        $request->validate([
            'title' => 'required|min:5|max:150',
            'content' => 'nullable|min:10',
            'cover' => 'nullable',
            'category_id'=> 'exists:categories,id|nullable'

        ]);
        

        $data = $request->all();

        if($post->title != $data['title']){
            $slug = Post::getSlug($data['title']);
            $data['slug'] = $slug;
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
        return redirect()->route('admin.posts.index');
    }
}
