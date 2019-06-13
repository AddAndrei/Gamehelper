@extends('layouts.app')
@section('content')
<div class="container-fluid">
        <div class="row justify-content-left">
            <div class="col-2" id="hidden-bar">
                @include('auth.assets.leftmenucreate')



            </div>
            <!--Создание игры-->
            <div class="col-10">
                <div class="card">
                    <!--header-->
                    <div class="card-header">{{ __('Шаг Третий') }}</div>
                    <!--body-->
                    <div class="card-body">
                        <form method="POST" action="{{ route('createmap') }}">
                            <!--map game-->
                            <div class="form-group row">
                                <div class="col-sm-2 col-form-label text-sm-left">
                                    <!--Опции карты-->
                                    {{ __('Карта') }}
                                    <button type="button" class="btn btn-dark btn-block">Полигон</button>

                                </div>
                                <div class="col-sm-9" id="map">

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
    <script src="{{ asset('js/user/map.js') }}"></script>

@endsection
