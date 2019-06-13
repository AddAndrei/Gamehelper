<?php

namespace App\Http\Controllers\UserAction;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Repositories\GamesRepository;

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


    public function index(GamesRepository $games)
    {
        $collection = $games->getAllActiveGames();

        return view('auth.games',compact('collection'));
    }

}
