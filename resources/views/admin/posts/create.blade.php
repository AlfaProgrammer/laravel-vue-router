@extends('layouts.app')

@section('content')
    
    <div class="container">
        <h2>Crea il tuo articolo</h2>

        <form action="{{ route('admin.posts.store') }}" method="POST">
            @csrf
            <div>
                <input type="text" name="title" id="" placeholder="Inserisci il titolo del Post">
            </div>

            <div>
                <textarea name="content" id="content" cols="30" rows="10" placeholder="Inserisci il contenuto del Post">

                </textarea>
            </div>

            <div>
                <input type="text" name="cover" id="" placeholder="url immagine">
            </div>
            
            <button type="submit" class="btn btn-primary"> Post </button>

        </form>
    </div>
@endsection