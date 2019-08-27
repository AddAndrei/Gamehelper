@extends('layouts.game')

@section('content')

<div class="quests">

</div>

<div class="user" data-user="{{ Auth::user()->id }}" data-game="{{ Auth::user()->in_game }}" data-role="{{ Auth::user()->in_role }}" data-team="{{ Auth::user()->in_team }}"></div>
<script src="{{ asset('js/user/questsocket.js') }}"></script>
@endsection
