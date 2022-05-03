@extends('layouts.app')

@section('content')
    
    <div class="container">
        <h2>Crea il tuo Post</h2>

        <form action="{{ route('admin.posts.store') }}" method="POST">
            @csrf
            <div class="mb-3">
                <label for="post-title" class="form-label">Titolo Post</label>
                <input class="form-control" type="text" name="title" id="post-title" placeholder="Inserisci il titolo del Post" value="{{old('title')}}">
                @error('title')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>

            <div class="mb-3">
                <label for="post-content" class="form-label">Contenuto del post</label>
                <textarea class="form-control" name="content" id="post-content" cols="100" rows="10" placeholder="Inserisci il contenuto del Post">
                    {{old('content')}}
                </textarea>
            </div>

            <div class="mb-3">
                <label for="post-cover" class="form-label">Contenuto del post</label>
                <input class="form-control" type="text" name="cover" id="post-cover" placeholder="url immagine" value="{{old('cover')}}">
            </div>

           <div class="mb-3">
                <button type="submit" class="btn btn-primary"> Post </button>
           </div>

        </form>
                
    </div>
@endsection
