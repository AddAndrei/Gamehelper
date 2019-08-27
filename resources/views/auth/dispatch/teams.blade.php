<div class="container-fluid">
    <div class="row justify-content-left">
        <div class="col-2">
            @include('auth.dispatch.assets.leftmenu')
        </div>
        <div class="col-10" id="teams" data-game="{{ $game[0]->id }}">
            <div class="card">
                <div class="card-header">Команды</div>
                <div class="card-body" id="setteams">

                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/dispatch/teams.js') }}"></script>
