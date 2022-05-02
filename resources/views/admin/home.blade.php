@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}

                    <h2> Benvenuto {{$user->name}} </h2>
                    <ul>
                        <h4>Cosa puoi fare: </h4>
                        <li>
                            <a href="{{route('admin.posts.create')}}">Crea Il tuo Post</a>
                        </li>
                        <li>
                            <a href="{{route('admin.posts.index')}}">Visualizza tutti i tuoi post</a>
                        </li>
                    </ul>
                    

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
