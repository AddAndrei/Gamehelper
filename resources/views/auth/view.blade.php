@extends('layouts.app')

@section('content')
    @if(\Request::route()->getName()==='view')
        @include('auth.dispatch.game')
    @elseif(\Request::route()->getName()==='gameteams')
        @include('auth.dispatch.teams')
    @elseif(\Request::route()->getName()==='mapgame')
        @include('auth.dispatch.map')
    @endif
@endsection
