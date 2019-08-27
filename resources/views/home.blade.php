@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-left">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header"><b>{{ Auth::user()->family }} {{ Auth::user()->name }}</b></div>

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
        <div class="col-md-6" id="game">

        </div>
    </div>
</div><br>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            @if(!empty($games))
                <table class="table">
                    <thead class="table-dark">
                    <tr>
                        <th scope="col">Название</th>
                        <th scope="col">Город</th>
                        <th scope="col">Начало</th>
                        <th scope="col">Конец</th>
                        <th scope="col">Тип</th>
                        <th scope="col"><i class="fas fa-user-friends"></i></th>
                        <th scope="col"><i class="fas fa-lock"></i></th>
                        <th scope="col"><i class="far fa-eye"></i></th>
                    </tr>
                    </thead>
                    @foreach ($games as $i=>$item)
                        <tr>
                            <td>{{ $item->title }}</td>
                            <td>{{ $item->sity }}</td>
                            <td>{{ $item->start }}</td>
                            <td>{{ $item->end }}</td>
                            <td>{{ $item->typeGame->title }}</td>
                            <td>{{ $item->getTeams->count() }}</td>
                            @if($item->accessibility == 1)
                                <td><i class="fas fa-lock-open"></i></td>
                            @else
                                <td><i class="fas fa-lock"></i></td>
                            @endif
                            <td>
                                <a href="{{ route("view", $item->id) }}"><i class="fas fa-eye eye-game"></i></a>
                                <a href="{{ route("edit", $item->id) }}"><i class="fas fa-file-code redact-object-icon" title="Редактировать"></i></a>
                                <a href="{{ route('delete', $item->id) }}"><i class="far fa-trash-alt delete-object" title="Удалить"></i></a>
                            </td>
                        </tr>
                    @endforeach
                </table>
            @endif
            </div>
        </div>
    </div>
@include('auth.assets.paginator')
</div>
<script src="{{ asset('js/user/ingame.js') }}"></script>
@endsection
