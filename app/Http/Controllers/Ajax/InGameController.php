<?php


namespace App\Http\Controllers\Ajax;


use App\Services\InGameService;
use Illuminate\Support\Facades\Auth;

class InGameController extends BaseController
{
    /**
     * EntryGameController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     *
     */
    public function ingame(InGameService $game)
    {
        if(Auth::user()->in_game !== null){
            return $game->ingame(Auth::user()->in_game,Auth::user()->in_team,Auth::user()->in_role);
        }else{
            return null;
        }
    }

}
