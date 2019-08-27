<div class="col-10">
    <div class="card">
        <!--header-->
        <div class="card-header">{{ __('Шаг Третий') }}</div>
        <!--body-->
        <div class="card-body">
            <form method="POST" action="{{ route('createmap') }}">
                <!--map game-->
                <div class="form-group row maps-div">
                    <div class="col-sm-2 col-form-label text-sm-left">
                        <!--Опции карты-->
                        <button type="button" id="polygons" class="btn btn-dark btn-block">Полигон</button>

                    </div>
                    <div class="col-sm-10" id="map" data-sity="{{ Auth::user()->sity }}">

                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2 col-form-label text-sm-left"></div>
                    <div class="col-sm-10 error-drop">

                    </div>
                </div>
                <div class="form-group row for-objects">

                </div>

                <!--Добавить объъекты-->
                <div class="form-group row">
                    <label for="objects" class="col-sm-2 col-form-label text-md-right">{{ __('Объекты') }}</label>
                    <div class="col-sm-5">
                        <select id="objects" name="objects" class="form-control @error('objects') is-invalid @enderror">
                            @foreach ($defaultobjects as $i => $item)
                                <option id="{{ $i }}">{{ $item->title }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-sm-5">
                        <select id="teams" name="teams" class="form-control @error('objects') is-invalid @enderror">

                        </select>
                    </div>
                </div>

                <!--Создать свой объект-->
                <div class="form-group row">
                    <div class="col-sm-2">
                        <button class="btn btn-primary btn-dark btn-block" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Создать объект
                        </button>
                    </div>
                    <div class="col-sm-8">
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                <div class="form-group row">
                                    <label for="new-object-title" class="col-sm-2 col-form-label text-sm-left">{{ __('Название') }}</label>
                                    <div class="col-sm-10">
                                        <input id="new-object-title" type="text" class="form-control @error('new-role-title') is-invalid @enderror" name="new-role-title" placeholder="Название объекта" value="{{ old('new-role-title') }}" autocomplete="new-role-title" autofocus>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="new-object-description" class="col-sm-2 col-form-label text-sm-left">{{ __('Описание') }}</label>
                                    <div class="col-sm-10">
                                        <textarea name="new-object-description" id="new-role-description" cols="30" rows="5" class="form-control @error('new-role-description') is-invalid @enderror" name="new-role-description" placeholder="Описание объекта" value="{{ old('new-role-description') }}" autocomplete="new-role-description" autofocus></textarea>
                                    </div>

                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <button class="btn btn-primary btn-dark btn-block" type="button" id="addrobject" data-toggle="collapse" onclick="CreateObject()">
                                            Добавить
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-primary btn-dark btn-block" type="button" onclick="AddObject()">
                            Добавить
                        </button>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10"></div>
                    <div class="col-sm-2">
                        <button class="btn btn-primary btn-dark btn-block" type="button" onclick="saveData()" data-toggle="collapse">
                            Далее
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
