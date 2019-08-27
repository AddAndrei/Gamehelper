@extends('layouts.game')

@section('content')
    <div class="container-fluid">
        <div class="row-fluid">
            <div id="map" class="col-lg-12 col-sm-12 col-12">

            </div>
        </div>
    </div>

    <div class="user" data-user="{{ Auth::user()->id }}" data-game="{{ Auth::user()->in_game }}" data-role="{{ Auth::user()->in_role }}" data-team="{{ Auth::user()->in_team }}"></div>
    <script src="{{asset('js/user/lookmap.js')}}"></script>

    <script src="{{asset('js/gamemap.js')}}"></script>
@endsection
