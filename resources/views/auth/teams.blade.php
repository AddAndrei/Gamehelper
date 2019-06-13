@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row justify-content-left">
        <div class="col-2" id="hidden-bar">
            @include('auth.assets.leftmenucreate')

        </div>
        <!--Создание команды-->
        <div class="col-10">
            <div class="card">
                <!--header-->
                <div class="card-header">{{ __('Шаг второй') }}</div>
                <!--body-->
                <div class="card-body">
                    <form method="POST" action="{{ route('createmap') }}">
                        @csrf
                        <!--type team-->
                        <div class="form-group row">
                            <label for="teamname" class="col-sm-2 col-form-label text-sm-left">{{ __('Название') }}</label>
                            <!--Выбрать тип игры-->
                            <div class="col-sm-10">
                                <input id="teamname" type="text" class="form-control @error('teamname') is-invalid @enderror" name="teamname" placeholder="Название команды" value="{{ old('teamname') }}" required autocomplete="teamname" autofocus>


                                @error('type')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <!--Роли-->
                        @foreach ($collection as $item)
                        <div class="form-group row">
                            <label for="{{ $item->id }}" class="col-sm-2 col-form-label text-sm-left">{{ __('Роль') }}</label>
                            <label for="{{ $item->id }}" class="col-sm-2 col-form-label text-sm-left">{{ $item->title }}</label>
                            <label for="{{ $item->id }}" class="col-sm-6 col-form-label text-sm-left"></label>
                            <label for="{{ $item->id }}" class="col-sm-2 col-form-label text-sm-right"><i class="fas fa-times roles-close"></i></label>
                            <!--<div class="col-sm-2">
                                <span class="align-middle">{{ $item->title }}</span>
                            </div>-->
                        </div>
                        @endforeach
                        <!--Роль по умолчанию-->
                        <div class="form-group row">
                            <label for="default_role" class="col-sm-2 col-form-label text-sm-left">{{ __('Роль по умолчанию') }}</label>
                            <div class="col-sm-10">
                                <select id="default_role" name="default_role" class="form-control @error('default_role') is-invalid @enderror">
                                    @foreach ($collection as $item)
                                        <option id="{{ $item->id }}">{{ $item->title }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <!--Создать новую роль-->
                        <div class="form-group row">
                            <div class="col-sm-2">
                                <button class="btn btn-primary btn-dark btn-block" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Создать роль
                                </button>
                            </div>
                            <div class="col-sm-10">
                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body">
                                            <div class="form-group row">
                                                <label for="new-role-title" class="col-sm-2 col-form-label text-sm-left">{{ __('Роль') }}</label>
                                                <div class="col-sm-6">
                                                    <input id="new-role-title" type="text" class="form-control @error('new-role-title') is-invalid @enderror" name="new-role-title" placeholder="Название роли" value="{{ old('new-role-title') }}" autocomplete="new-role-title" autofocus>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                    <label for="new-role-description" class="col-sm-2 col-form-label text-sm-left">{{ __('Описание роли') }}</label>
                                                    <div class="col-sm-6">
                                                        <textarea name="new-role-description" id="new-role-description" cols="30" rows="5" class="form-control @error('new-role-description') is-invalid @enderror" name="new-role-description" placeholder="Описание роли" value="{{ old('new-role-description') }}" autocomplete="new-role-description" autofocus></textarea>
                                                    </div>
                                                    <div class="col-sm-4">
                                                            <i class="fas fa-blind list-icons"></i>
                                                            <i class="fas fa-bell list-icons"></i>
                                                            <i class="fas fa-chess-knight list-icons"></i>
                                                            <i class="fas fa-chess-bishop list-icons"></i>
                                                            <i class="fas fa-chess-king list-icons"></i>
                                                            <i class="fas fa-chess-queen list-icons"></i>
                                                            <i class="fas fa-chess-rook list-icons"></i>
                                                            <i class="fas fa-child list-icons"></i>
                                                            <i class="fas fa-crow list-icons"></i>
                                                            <i class="fas fa-female list-icons"></i>
                                                            <i class="fas fa-fire list-icons"></i>
                                                            <i class="fas fa-fire-extinguisher list-icons"></i>
                                                            <i class="fas fa-flag-checkered list-icons"></i>
                                                            <i class="fas fa-motorcycle list-icons"></i>
                                                            <i class="fas fa-broadcast-tower list-icons"></i>
                                                    </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-2">
                                                        <button class="btn btn-primary btn-dark btn-block" type="button" id="addrole" data-toggle="collapse">
                                                                Добавить
                                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                        </div>
                        <!--Цвет команды-->
                        <div class="form-group row align-items-center">
                            <label for="color" class="col-sm-2 col-form-label text-sm-left">{{ __('Цвет команды') }}</label>
                            <div class="col-sm-8">

                                    <canvas id="color-picker"></canvas>


                            </div>
                            <div class="col-sm-2">
                                <div class="selected"></div>
                            </div>
                        </div>
                        <!---->
                        <div class="form-group row">
                            <div class="col-sm-10"></div>
                            <div class="col-sm-2">
                                <button type="submit" name="stepthree" class="btn btn-dark btn-block">Далее</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/colorpicker.js') }}"></script>
@endsection
