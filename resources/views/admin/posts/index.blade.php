@extends('layouts.app')
@section('content')

    {{-- <div class="container">
        <h2>Questi sono i tuoi post</h2>
        <ul>
            @foreach ($userPosts as $post)
                <li>
                    <h4>{{ $post->title }}</h4>
                    <p>{{ $post->content }}</p>
                </li>
            @endforeach
        </ul>  
    </div> --}}

    <table class="table container">
        <thead>
            <tr>
                {{-- <th scope="col">#</th> --}}
                <th scope="col">Titolo</th>
                <th scope="col">Contenuto</th>
                {{-- <th scope="col">Categoria</th> --}}
                <th scope="col">Slug</th>
                <th scope="col">Azioni</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($userPosts as $post)
                <tr>
                    {{-- <td>{{ $post->id }}</td> --}}
                    <td>{{ $post->title }}</td>
                    <td>{{ substr($post->content, 0, 30) }}</td>
                    {{-- <td>{{ substr($post->category->name) }}</td> --}}
                    <td>{{ $post->slug }}</td>

                    <td class="d-flex">

                        <a href="{{ route('admin.posts.edit', ['post' => $post->id]) }}"
                            class="btn btn-warning mx-2">Modifica</a>

                        <form method="POST"
                            action="{{ route('admin.posts.destroy', ['post' => $post->id]) }}">
                            @csrf
                            @method('DELETE')
                            <button onclick="return confirm('Sei sicuro di volerlo eliminare?')" type='submit'
                                class="btn btn-danger">Elimina</button>
                        </form>

                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
      
@endsection