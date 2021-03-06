@dump($errors->all())
@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Modifica il tuo Post</h2>

        <form action="{{ route('admin.posts.update', $post) }}" method="POST">
            @csrf
            @method('PUT')

            <div class="mb-3">
                <label for="post-title" class="form-label">Titolo Post</label>
                <input class="form-control" type="text" name="title" id="post-title" placeholder="Inserisci il titolo del Post" value="{{ old('title', $post->title) }}">
                @error('title')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>

            {{-- categories  --}}
            <div class="form-group">
                <label for="category_id">Seleziona Categoria</label>
                <select name="category_id" id="category_id" class="form-control @error ('category_id') is-invalid @enderror">
                    <option value=""> --Nessuna Categoria--</option>
                    @foreach ($categories as $category)
                        <option {{old('category_id', optional($post->category)->id ) == $category->id ? 'selected' : '' }} value="{{ $category->id }}">{{ $category->name }}</option>
                    @endforeach
                    @error('category_id')
                        <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </select>
            </div>

            {{-- tags --}}
            <h4>Tags</h4>
            <div class="d-flex" style="gap: 1rem">
                @foreach ($tags as $tag)                
                    <div class="form-group form-check ">
                        <input {{$post->tags->contains( $tag ) ? 'checked' : ''}} type="checkbox" class="form-check-input" value="{{$tag->id}}" name="tags[ {{$loop->index}} ]" id="tag{{ $tag->id }}">
                        <label class="form-check-label" for="tag{{ $tag->id }}">{{ $tag->name }} {{$loop->index}}</label>
                        @error('tags.{{$loop->index}}')
                            <span class="text-danger"> {{$message}} </span>
                        @enderror
                    </div>
                @endforeach
            </div>

            <div class="mb-3">
                <label for="post-content" class="form-label">Contenuto del post</label>
                <textarea class="form-control" name="content" id="post-content" cols="100" rows="10" placeholder="Inserisci il contenuto del Post">
                    {{ old('content', $post->content) }}
                </textarea>
                @error('content')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>

            <div class="mb-3">
                <label for="post-cover" class="form-label">Contenuto del post</label>
                <input class="form-control" type="text" name="cover" id="post-cover" placeholder="url immagine" value="{{ old('cover', $post->cover) }}">
                @error('cover')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>

           <div class="mb-3">
                <button type="submit" class="btn btn-warning"> Modifica </button>
           </div>

        </form>
                
    </div>
@endsection