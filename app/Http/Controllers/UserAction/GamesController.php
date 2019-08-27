<?php

namespace App\Http\Controllers\UserAction;



use App\Models\Games;
use App\Repositories\GamesRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class GamesController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * @param Games $games
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(GamesRepository $games)
    {

        $paginator = $games->getAllActiveGames();
        return view('auth.games',[
                    'paginator'=>$paginator,
                    'data'=>$paginator->items(),
                                    ]);
    }

}
