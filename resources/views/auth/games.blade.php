@extends('layouts.app')

@section('content')

    <div class="conitaner-fluid">
        <div class="row-fluid">
            <div class="col-12">
                @if(!empty($data))
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
                    @foreach ($data as $i=>$item)
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
                                <td><a href="{{ route('lookgame',$item->id) }}"><i class="fas fa-eye eye-game"></i></a></td>
                        </tr>
                    @endforeach
                </table>
                @else
                <center>Игр нет</center>
                @endif
            </div>
        </div>
    </div>

    @include('auth.assets.paginator')
@endsection
