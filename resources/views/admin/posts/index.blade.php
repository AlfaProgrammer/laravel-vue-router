@extends('layouts.app')
@section('content')

    <div class="container">
        <h2>Questi sono i tuoi post</h2>
        <ul>
            @foreach ($userPosts as $post)
                <li>
                    <h4>{{ $post->title }}</h4>
                    <p>{{ $post->content }}</p>
                </li>
            @endforeach
        </ul>  
    </div>
      
@endsection