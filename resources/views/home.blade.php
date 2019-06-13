@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-left">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Пользователь: {{ Auth::user()->family }} {{ Auth::user()->name }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif



                    <p class="card-text">Позывной: {{ Auth::user()->invoking }}</p>
                    <p class="card-text">Логин: {{ Auth::user()->mobile }}</p>
                    <p class="card-text">Город: {{ Auth::user()->sity }}</p>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection
