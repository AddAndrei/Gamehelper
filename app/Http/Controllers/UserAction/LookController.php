<?php

namespace App\Http\Controllers\UserAction;

use App\Repositories\GamesRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LookController extends BaseController
{
    //
    public function __construct()
    {
        parent::__construct();
    }



    public function viewgame($id,GamesRepository $games)
    {
        $game = $games->getGame($id);

        //dd($game);
        return view('auth.lookgame',[
                                            'game'=>$game,
                                            'teams'=>$game[0]->getTeams
                                        ]);
    }
}
