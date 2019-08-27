<div class="container-fluid">
    <div class="row justify-content-left">
        <div class="col-2">
            @include('auth.dispatch.assets.leftmenu')
        </div>
        <div class="col-10">
            <div class="card">
                <!--header-->
                <div class="card-header">
                    <div class="row justify-content-left">
                        <div class="col-4">{{ $game[0]->title }}</div>
                        <div class="col-4 text-lg-center"><i class="fas fa-university"></i>{{ $game[0]->sity }}</div>
                        <div class="col-4 text-lg-right">{{ $game[0]->typeGame->title }}</div>

                    </div>



                </div>
                <!--body-->
                @if($game[0]->logo !== null)
                    <img class="card-img-top" src="{{ $game[0]->logo }}" alt="{{ $game[0]->title }}">
                @endif
                <div class="card-body">
                    <h1>Описание</h1>
                    <p class="card-text">{{ $game[0]->description }}</p>
                </div>
            </div>

        </div>
    </div>
</div>
