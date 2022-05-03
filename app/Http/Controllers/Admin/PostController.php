<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
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
        $userPosts = Post::orderBy('created_at', 'desc')->paginate(10);
        return view('admin.posts.index', compact('userPosts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.posts.create');
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
            'content' => 'nullable',
            'cover' => 'nullable'
        ]);
        

        $data = $request->all();
        $newPost = new Post();

        $slug = Post::getSlug( $data['title'] );
               
        $newPost->fill($data);
        $newPost->slug = $slug;


        $newPost->save();

        // $data = $request->all();

        // $newPost = new Post();
        
        // $newPost->title = $data['title'];
        // $newPost->content = $data['content'];
        // $newPost->slug = Str::slug( $newPost->title );
        // $newPost->cover = $data['cover'];

        // $newPost->save();
        

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
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
