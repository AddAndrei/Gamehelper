@foreach($teams as $team)
    <div class="form-group row">
        <label for="{{ $team->id }}" class="col-sm-2 col-form-label text-sm-left">{{ $team->title }}</label>
        @if($team->password != null)
            <div class="col-sm-5">
                <input id="{{ $team->id }}" type="password" placeholder="пароль" class="form-control " required="" autocomplete="current-password">
            </div>
            <div class="col-sm-5">
                <button type="button" class="btn btn-dark btn-block" onclick="entryGame({{ $game[0]->id }},{{ $team->id }})">Вступить</button>
            </div>
        @else
            <div class="col-sm-5"></div>
            <div class="col-sm-5">
                <button type="button" class="btn btn-dark btn-block" onclick="entryGame({{ $game[0]->id }},{{ $team->id }})">Вступить</button>
            </div>
        @endif
    </div>
@endforeach
