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
                <div class="card-header">{{ __('Шаг первый') }}</div>
                <!--body-->
                <div class="card-body">
                    <form method="POST" action="{{ route('createteams') }}">
                    @csrf
                        <!--type game-->
                        <div class="form-group row">
                            <label for="type" class="col-sm-2 col-form-label text-sm-left">{{ __('Тип') }}</label>
                            <!--Выбрать тип игры-->
                            <div class="col-sm-10">
                                <select id="type" name="type" class="form-control @error('type') is-invalid @enderror">
                                    @foreach ($items as $item)
                                        <option id="{{ $item->id }}">{{ $item->title }}</option>
                                    @endforeach
                                </select>


                                @error('type')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <!--name game-->
                        <div class="form-group row">
                            <label for="name" class="col-sm-2 col-form-label text-sm-left">{{ __('Название') }}</label>
                            <!--Выбрать тип игры-->
                                <div class="col-sm-10">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" placeholder="Название игры" value="{{ old('name') }}" required autocomplete="name" autofocus>
                                @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                        </div>
                        <!--description game-->
                        <div class="form-group row">
                            <label for="description" class="col-sm-2 col-form-label text-sm-left">{{ __('Описание') }}</label>
                            <!--Выбрать тип игры-->
                                <div class="col-sm-10">
                                    <textarea name="description" id="description" cols="30" rows="5" class="form-control @error('description') is-invalid @enderror" name="description" placeholder="Описание" value="{{ old('description') }}" required autocomplete="description" autofocus></textarea>

                                @error('description')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                        </div>
                        <!--start game-->
                        <div class="form-group row">
                            <label for="start" class="col-sm-2 col-form-label text-sm-left">{{ __('Начало') }}</label>
                            <!--Выбрать тип игры-->
                                <div class="col-sm-10">
                                    <input id="start" type="datetime-local" class="form-control @error('start') is-invalid @enderror" name="start" value="<?=date("Y-m-d")?>T<?=date("H:s")?>" required autocomplete="start" autofocus>

                                @error('start')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                        </div>
                        <!--end game-->
                        <div class="form-group row">
                            <label for="end" class="col-sm-2 col-form-label text-sm-left">{{ __('Конец') }}</label>
                            <!--Выбрать тип игры-->
                                <div class="col-sm-10">
                                    <input id="end" type="datetime-local" class="form-control @error('end') is-invalid @enderror" name="end" value="<?=date("Y-m-d")?>T<?=date("H:s")?>" required autocomplete="end" autofocus>

                                @error('end')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                        </div>
                        <div class="form-group row">
                                <label for="" class="col-sm-2 col-form-label text-sm-left">{{ __('Логотип') }}</label>
                                <div class="col-sm-2">
                                        <label for="uploade-file" class="file-up btn btn-dark">
                                                <input type="file" name="image" id="uploade-file" onchange="previewImg(this)">
                                                Загрузить лого
                                        </label>
                                </div>



                            </div>
                            <div class="form-group row">
                                <div class="col-sm-2">

                                </div>
                                <div class="col-sm-10" id="preload-img">

                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-10"></div>
                                <div class="col-sm-2">
                                    <button type="submit" name="stepto" class="btn btn-dark btn-block">Далее</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>

        </div>
    </div>

</div>


@endsection
