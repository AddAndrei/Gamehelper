@extends('layouts.app')

@section('content')
    <div id="result"></div>
    <!-- Modal -->
    @include('auth.assets.redactquest')
    <!--menu-->
    <div class="container-fluid">
        <div class="row justify-content-left">
            <div class="col-2" id="hidden-bar">
                @include('auth.assets.leftmenucreate')
            </div>
            <!--Создание квестов-->
            <div class="col-10">
                <div class="card">
                    <!--header-->
                    <div class="card-header">{{ __('Шаг Четвертый') }}</div>
                    <!--body-->
                    <div class="card-body">
                        <div class="form-group row error">

                        </div>
                        <div class="form-group row maps-div">

                            <div class="col-sm-12" id="map" data-sity="{{ Auth::user()->sity }}">

                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-2 col-form-label text-sm-left"></div>
                            <div class="col-sm-10 error-drop">

                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-12 for-quests">

                            </div>
                        </div>
                        @include('auth.assets.addtasks')
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/user/map.js') }}"></script>
    <script src="{{ asset('js/quests.js') }}"></script>
@endsection
