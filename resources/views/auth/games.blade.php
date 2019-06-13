@extends('layouts.app')

@section('content')
    <table>
        @foreach ($collection as $item)
            <tr>
                <td>{{ $item->id }}</td>
                <td>{{ $item->title }}</td>
                <td>{{ $item->description }}</td>
            </tr>
        @endforeach
    </table>
@endsection
