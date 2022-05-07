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

            <div class="form-group">
                <label for="category_id">Seleziona Categoria</label>
                <select name="category_id" id="category_id" class="form-control @error ('category_id') is-invalid @enderror">
                    <option value=""> --Nessuna Categoria--</option>
                    @foreach ($categories as $category)
                        <option {{old('category_id') == $category->id ? 'selected' : ''}} value="{{ $category->id }}">{{ $category->name }}</option>
                    @endforeach
                    @error('category_id')
                        <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </select>
            </div>

            <div class="mb-3">
                <label for="post-content" class="form-label">Contenuto del post</label>
                <textarea class="form-control" name="content" id="post-content" cols="100" rows="10" placeholder="Inserisci il contenuto del Post">
                    {{old('content')}}
                </textarea>
                @error('content')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>

            <div class="mb-3">
                <label for="post-cover" class="form-label">Contenuto del post</label>
                <input class="form-control" type="text" name="cover" id="post-cover" placeholder="url immagine" value="{{old('cover')}}">
                @error('cover')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>

           <div class="mb-3">
                <button type="submit" class="btn btn-primary"> Post </button>
           </div>

        </form>
                
    </div>
@endsection
