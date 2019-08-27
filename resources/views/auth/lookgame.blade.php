@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="row justify-content-left">
            <div class="col-12 col-md-12 col-sm-12 col-lg-6">
                <div class="card">
                    <div class="card-header">{{ $game[0]->title }}</div>
                    @if(!empty($game[0]->logo))
                        <img class="card-img-top" src="{{ $game[0]->logo }}" alt="{{ $game[0]->logo }}">
                    @endif
                    <div class="card-body">
                        <h5 class="card-title" data-toggle="collapse" data-target="#collapseDescription" aria-expanded="false" style="cursor: pointer;" aria-controls="collapseDescription">Описание игры</h5>
                        <p class="card-text collapse" id="collapseDescription">{{ $game[0]->description }}</p>
                        <h5 class="card-title" data-toggle="collapse" data-target="#collapseDataGame" aria-expanded="false" style="cursor: pointer;" aria-controls="collapseDataGame">Детали игры</h5>
                        <div id="collapseDataGame" class="collapse">
                            <div class="form-group row">
                                <label for="" class="col-form-label col-6 col-sm-6">Тип игры:</label>
                                <label for="" class="col-form-label col-6 col-sm-6">{{ $game[0]->typeGame->title }}</label>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-form-label col-6 col-sm-6">Начало игры:</label>
                                <label for="" class="col-form-label col-6 col-sm-6">{{ $game[0]->start }}</label>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-form-label col-6 col-sm-6">Конец игры:</label>
                                <label for="" class="col-form-label col-6 col-sm-6">{{ $game[0]->end }}</label>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-form-label col-6 col-sm-6">Город:</label>
                                <label for="" class="col-form-label col-6 col-sm-6">{{ $game[0]->sity }}</label>
                            </div>
                        </div>
                        @if(Auth::user()->in_game != null)
                            <div class="card text-white bg-danger mb-3" style="max-width: 100%;">
                                <div class="card-header">Внимание</div>
                                <div class="card-body">
                                    <h5 class="card-title">Вы находитесь в другой игре</h5>
                                    <p class="card-text">Вы не можете находится в двух играх одновременно , что бы вступить в эту игру , вам необходимо дождаться окончания вашей текущей игры или же выйыти из неё!</p>
                                </div>
                            </div>
                        @else
                            <h5 class="card-title" data-toggle="collapse" data-target="#collapseTeams" aria-expanded="false" style="cursor: pointer;" aria-controls="collapseTeams">Команды</h5>
                            <div id="collapseTeams" class="collapse">
                                @include('auth.assets.entrygame')
                            </div>

                        @endif

                    </div>

                </div>
            </div>
            <!--map-->
            <div class="col-12 col-md-12 col-sm-12 col-lg-6">
                <div class="card">
                    <div class="card-header" id="datagame" data-id-game="{{ $game[0]->id }}">
                        Карта
                    </div>
                    <div class="card-body" style="width: 100%;height: 481px;" id="map"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row justify-content-left">
            <div class="col-12 col-md-12 col-sm-12 col-lg-6">
                <a href="{{ route('games') }}">Назад</a>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/user/lookmap.js') }}"></script>
    <script src="{{ asset('js/user/entry.js') }}"></script>

@endsection()
