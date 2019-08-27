@extends('layouts.game')

@section('content')

    <table class="table">
        <thead class="table-dark">
        <tr>
            <th scope="col">Позывной</th>
            <th scope="col">Роль</th>
        </tr>
        </thead>
        <tbody>
            @foreach($users as $user)
                <tr>
                    <td>{{ $user->invoking }}</td>
                    <td>{{ $user->getRole->title }}</td>
                </tr>
                @endforeach
        </tbody>
    </table>
@endsection
