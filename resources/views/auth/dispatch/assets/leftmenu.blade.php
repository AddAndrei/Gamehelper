<nav class="navbar navbar-light bg-dark">
    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link leftmenubar" href="{{ route("view", $game[0]->id) }}">Основное</a>
        </li>
        <li class="nav-item">
            <a class="nav-link leftmenubar" href="{{ route('gameteams',$game[0]->id) }}">Команды</a>
        </li>
        <li class="nav-item">
            <a class="nav-link leftmenubar" href="{{ route('mapgame',$game[0]->id) }}">Карта</a>
        </li>
        <li class="nav-item">
            <a class="nav-link leftmenubar" href="{{ route('quests') }}">Квесты</a>
        </li>
        <li class="nav-item text-light">
            {{ $game[0]->end }}
        </li>
    </ul>
</nav>
