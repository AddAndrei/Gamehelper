<?php


namespace App\Http\Controllers\Ajax;




use App\Repositories\GamesRepository;
use Illuminate\Support\Facades\Auth;

class GameMapController extends BaseController
{
    /**
     * EntryGameController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * @param GamesRepository $game
     * @return array
     */
    public function index(GamesRepository $game)
    {
        return $game->getMap(Auth::user()->in_game,Auth::user()->in_team);
    }
}
