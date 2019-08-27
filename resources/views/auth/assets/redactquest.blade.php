<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <form>
                    <div class="form-group row">
                        <div class="col-sm-12" id="map-redact" data-sity="{{ Auth::user()->sity }}">

                        </div>
                    </div>
                    <div class="card-group">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group row">
                                    <label for="redact-quest-title" class="col-sm-2 col-form-label text-md-right">{{ __('Название') }}</label>
                                    <div class="col-sm-10">
                                        <input id="redact-quest-title"
                                               type="text" class="form-control"
                                               placeholder="Название квеста"
                                               oninput="this.value = this.value.replace(/[:;^#*{}$%\\/\_\[\]()+-\.\,<>]/g,'')"
                                               autocomplete="new-quest-title" autofocus>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="redact-quest-description" class="col-sm-2 col-form-label text-md-right">{{ __('Описание') }}</label>
                                    <div class="col-sm-10">
                                            <textarea name="redact-quest-description"
                                                      id="redact-quest-description"
                                                      cols="7"
                                                      rows="3"
                                                      placeholder="Описание квеста"
                                                      required

                                                      oninput="this.value = this.value.replace(/[:;^#*{}$%\\/\_\[\]()+-\.\,<>]/g,'')"
                                                      autocomplete="redact-quest-description" autofocus
                                                      class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="redact-quest-variants" class="col-sm-2 col-form-label text-md-right">{{ __('Варианты') }}</label>
                                    <div class="col-sm-10">
                                        <select id="redact-quest-variants" onchange="checkRedactVariant(this)" name="redact-quest-variants" class="form-control">
                                            <option value="1">Без выполнения</option>
                                            <option value="2">Ввод кода</option>
                                        </select>
                                    </div>

                                </div>
                                <div class="form-group row hidden-pass-redact">
                                    <label for="redact-quests-pass" class="col-sm-2 col-form-label text-md-right">{{ __('Пароль') }}</label>
                                    <div class="col-sm-6">
                                        <input type="text" id="redact-quests-pass"
                                               class="form-control"
                                               placeholder="Пароль"
                                               oninput="this.value = this.value.replace(/[:;^! #*{}$%\\/\_\[\]()+-\.\,<>]/g,'')"
                                               maxlength="16"/>
                                    </div>
                                    <div class="col-sm-4">
                                        <button class="btn btn-primary btn-dark btn-block" onclick="genesisPass(true)" type="button" data-toggle="collapse">
                                            Пароль
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group row hidden-parents-quest">
                                    <label for="redact-quest-parents" class="col-sm-2 col-form-label text-md-right">{{ __('Родитель') }}</label>
                                    <div class="col-sm-10">
                                        <select id="redact-quest-parents" name="new-quest-variants" class="form-control">
                                            <option value="noparents">Без родителя</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="redact-quest-start" class="col-sm-2 col-form-label text-md-right">{{ __('Начало') }}</label>
                                    <div class="col-sm-10">
                                        <input id="redact-quest-start"
                                               type="datetime-local"
                                               class="form-control"
                                               name="redact-quest-start"
                                               value="<?=date("Y-m-d")?>T<?=date("H:s")?>"
                                               required autocomplete="new-quest-start" autofocus>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="redact-quest-team" class="col-sm-2 col-form-label text-md-right">{{ __('Команда') }}</label>
                                    <div class="col-sm-10">
                                        <select id="redact-quest-team" name="new-quest-team" class="form-control">
                                            <option id="all">Всем</option>

                                        </select>
                                    </div>

                                </div>
                                <div class="form-group row">
                                    <label for="redact-quest-role" class="col-sm-2 col-form-label text-md-right">{{ __('Роль') }}</label>
                                    <div class="col-sm-10">
                                        <select id="redact-quest-role" name="redact-quest-role" class="form-control">
                                            <option id="all">Всем</option>

                                        </select>
                                    </div>

                                </div>
                                <div class="form-group row">
                                    <label for="redact-quest-user" class="col-sm-2 col-form-label text-md-right">{{ __('Игрок') }}</label>
                                    <div class="col-sm-10">
                                        <select id="redact-quest-user" name="new-quest-user" class="form-control">
                                            <option id="all">Всем</option>

                                        </select>
                                    </div>

                                </div>
                                <div class="form-group row">
                                    <label for="redact-quest-score" class="col-sm-2 col-form-label text-md-right">{{ __('Очки') }}</label>
                                    <div class="col-sm-10">
                                        <input id="redact-quest-score"
                                               type="text" class="form-control"
                                               name="redact-quest-score"
                                               placeholder="Очки"

                                               value=""
                                               autocomplete="new-quest-score" autofocus
                                               oninput="this.value = this.value.replace(/[№@:;^! #*{}$%\\/\_\[\]()+-\.\,<>a-zA-Zа-яА-Я]/g,'')">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="redact-quest-end" class="col-sm-2 col-form-label text-md-right">{{ __('Конец') }}</label>
                                    <div class="col-sm-10">
                                        <input id="redact-quest-end"
                                               type="datetime-local"
                                               class="form-control"
                                               name="redact-quest-end"
                                               value="<?=date("Y-m-d")?>T<?=date("H:s")?>"
                                               required autocomplete="new-quest-end" autofocus>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-2 col-form-label text-md-right">{{ __('Картинка') }}</label>
                                    <div class="col-sm-3">
                                        <label for="uploade-file-redact" class="file-up btn btn-dark">
                                            <input type="file" name="image" id="uploade-file-redact" onchange="previewRedactImg(this)">
                                            Загрузить
                                        </label>
                                    </div>
                                    <div class="col-sm-3">
                                        <button class="btn btn-primary btn-dark btn-block" onclick="deleteImage()" type="button" data-toggle="collapse">
                                            Удалить картинку
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-12" id="redact-image-quest">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <!--<div class="form-group row">
                            <label for="redact-quest-title" class="col-sm-3 col-form-label text-md-right">{{ __('Название') }}</label>
                            <div class="col-sm-9">
                                <input id="redact-quest-title"
                                       type="text" class="form-control"
                                       placeholder="Название квеста"
                                       oninput="this.value = this.value.replace(/[:;^#*{}$%\\/\_\[\]()+-\.\,<>]/g,'')"
                                       autocomplete="new-quest-title" autofocus>
                            </div>
                        </div>-->
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                <button type="button" class="btn btn-secondary" onclick="saveRedactQuest(this)">Сохранить</button>
            </div>
        </div>
    </div>
</div>
