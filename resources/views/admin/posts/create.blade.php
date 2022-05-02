@extends('layouts.app')

@section('content')
    
    <div class="container">
        <h2>Crea il tuo articolo</h2>

        <form action="{{ route('admin.posts.store') }}" method="POST">
            @csrf
            <div>
                <input type="text" name="title" id="post-title" placeholder="Inserisci il titolo del Post" value="{{old('title')}}">
            </div>

            <div>
                <textarea name="content" id="post-content" cols="100" rows="10" placeholder="Inserisci il contenuto del Post">
                    {{old('content')}}
                </textarea>
            </div>

            <div>
                <input type="text" name="cover" id="post-cover" placeholder="url immagine" value="{{old('cover')}}">
            </div>

           <div>
                <button type="submit" class="btn btn-primary"> Post </button>
           </div>

        </form>

        
    </div>
@endsection
