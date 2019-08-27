<div class="card-group">
    <div class="card">

        <div class="card-body">
            <div class="form-group row">
                <label for="new-quest-title" class="col-sm-3 col-form-label text-md-right">{{ __('Название') }}</label>
                <div class="col-sm-9">
                    <input id="new-quest-title"
                           type="text" class="form-control
                           @error('new-quest-title') is-invalid
                           @enderror" name="new-quest-title"
                           placeholder="Название квеста"
                           required
                           value="{{ old('new-quest-title') }}"
                           oninput="this.value = this.value.replace(/[:;^#*{}$%\\/\_\[\]()+-\.\,<>]/g,'')"
                           autocomplete="new-quest-title" autofocus>
                </div>

            </div>
            <div class="form-group row">
                <label for="new-quest-description" class="col-sm-3 col-form-label text-md-right">{{ __('Описание') }}</label>
                <div class="col-sm-9">
                    <textarea name="new-quest-description"
                              id="new-quest-description"
                              cols="7"
                              rows="3"
                              placeholder="Описание квеста"
                              required
                              @error('new-quest-description') is-invalid @enderror
                              value="{{ old('new-quest-description') }}"
                              oninput="this.value = this.value.replace(/[:;^#*{}$%\\/\_\[\]()+-\.\,<>]/g,'')"
                              autocomplete="new-quest-description" autofocus
                              class="form-control"></textarea>
                </div>
            </div>
            <div class="form-group row">
                    <label for="new-quest-variants" class="col-sm-3 col-form-label text-md-right">{{ __('Варианты') }}</label>
                    <div class="col-sm-9">
                        <select id="new-quest-variants" onchange="checkVariant(this)" name="new-quest-variants" class="form-control @error('new-quest-variants') is-invalid @enderror">
                            <option value="1">Без выполнения</option>
                            <option value="2">Ввод кода</option>
                        </select>
                    </div>

            </div>
            <!--пароль для квестов-->
            <div class="form-group row hidden-pass">
                <div class="col-sm-8">
                    <input type="text" id="quests-pass"
                           class="form-control"
                           placeholder="Пароль"
                           oninput="this.value = this.value.replace(/[:;^! #*{}$%\\/\_\[\]()+-\.\,<>]/g,'')"
                           maxlength="16"/>
                </div>
                <div class="col-sm-4">
                    <button class="btn btn-primary btn-dark btn-block" onclick="genesisPass()" type="button" data-toggle="collapse">
                        Пароль
                    </button>
                </div>
            </div>
            <!---->
            <!--Родительсие квесты-->
            <div class="form-group row hidden-parents-quest">
                <label for="new-quest-parents" class="col-sm-3 col-form-label text-md-right">{{ __('Родитель') }}</label>
                <div class="col-sm-9">
                    <select id="new-quest-parents" name="new-quest-variants" class="form-control">
                        <option value="noparents">Без родителя</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="new-quest-start" class="col-sm-3 col-form-label text-md-right">{{ __('Начало') }}</label>
                <div class="col-sm-9">
                    <input id="new-quest-start"
                           type="datetime-local"
                           class="form-control @error('new-quest-start') is-invalid @enderror"
                           name="new-quest-start"
                           value="<?=date("Y-m-d")?>T<?=date("H:s")?>"
                           required autocomplete="new-quest-start" autofocus>
                </div>
            </div>

            <!--<h5 class="card-title">Card title</h5>
            <p class="card-text">
                This is a wider card with supporting text below
                as a natural lead-in to additional content.
                This content is a little bit longer.
            </p>
            <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
            </p>-->
        </div>
    </div>
    <div class="card">

        <div class="card-body">
            <div class="form-group row">
                <label for="new-quest-team" class="col-sm-3 col-form-label text-md-right">{{ __('Команда') }}</label>
                <div class="col-sm-9">
                    <select id="new-quest-team" name="new-quest-team" class="form-control @error('new-quest-team') is-invalid @enderror">
                        <option id="all">Всем</option>

                    </select>
                </div>

            </div>
            <div class="form-group row">
                <label for="new-quest-role" class="col-sm-3 col-form-label text-md-right">{{ __('Роль') }}</label>
                <div class="col-sm-9">
                    <select id="new-quest-role" name="new-quest-role" class="form-control @error('new-quest-role') is-invalid @enderror">
                        <option id="all">Всем</option>

                    </select>
                </div>

            </div>
            <div class="form-group row">
                <label for="new-quest-user" class="col-sm-3 col-form-label text-md-right">{{ __('Игрок') }}</label>
                <div class="col-sm-9">
                    <select id="new-quest-user" name="new-quest-user" class="form-control @error('new-quest-user') is-invalid @enderror">
                        <option id="all">Всем</option>

                    </select>
                </div>

            </div>
            <div class="form-group row">
                <label for="new-quest-score" class="col-sm-3 col-form-label text-md-right">{{ __('Очки') }}</label>
                <div class="col-sm-9">
                    <input id="new-quest-score"
                           type="text" class="form-control
                           @error('new-quest-score') is-invalid
                           @enderror" name="new-quest-score"
                           placeholder="Очки"

                           value="{{ old('new-quest-score') }}"
                           autocomplete="new-quest-score" autofocus
                           oninput="this.value = this.value.replace(/[№@:;^! #*{}$%\\/\_\[\]()+-\.\,<>a-zA-Zа-яА-Я]/g,'')">
                </div>
            </div>
            <div class="form-group row">
                <label for="new-quest-end" class="col-sm-3 col-form-label text-md-right">{{ __('Конец') }}</label>
                <div class="col-sm-9">
                    <input id="new-quest-end"
                           type="datetime-local"
                           class="form-control @error('new-quest-end') is-invalid @enderror"
                           name="new-quest-end"
                           value="<?=date("Y-m-d")?>T<?=date("H:s")?>"
                           required autocomplete="new-quest-end" autofocus>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label text-md-right">{{ __('Картинка') }}</label>
                <div class="col-sm-9">
                    <label for="uploade-file" class="file-up btn btn-dark">
                        <input type="file" name="image" id="uploade-file" onchange="previewImg(this)">
                        Загрузить
                    </label>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10" id="preload-img">

                </div>
            </div>
        </div>
    </div>

</div>
<div class="card-group">
    <div class="card">
        <div class="card-body">
            <div class="form-group row">
                <div class="col-sm-3">
                    <button class="btn btn-primary btn-dark btn-block" onclick="setMapQuest()" type="button" data-toggle="collapse">
                        пометить на карте
                    </button>
                </div>
                <div class="col-sm-6"></div>
                <div class="col-sm-3">
                    <button class="btn btn-primary btn-dark btn-block" type="button" onclick="addQuest()" data-toggle="collapse">
                        Добавить
                    </button>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-9"></div>
                <div class="col-sm-3">
                    <button class="btn btn-primary btn-dark btn-block" type="button" onclick="endCreateGame()" data-toggle="collapse">
                        Завершить
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
