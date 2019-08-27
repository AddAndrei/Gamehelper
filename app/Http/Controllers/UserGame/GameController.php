<?php


namespace App\Http\Controllers\UserGame;


use App\Repositories\UsersRepository;
use Illuminate\Support\Facades\Auth;

class GameController extends BaseController
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index($id)
    {
        return view('auth.game.quests',['id'=>$id]);
    }

    public function map($id)
    {
        return view('auth.game.map',['id'=>$id]);
    }

    public function stat($id)
    {
        return view('auth.game.stat',['id'=>$id]);
    }

    public function chat($id)
    {
        return view('auth.game.chat',['id'=>$id]);
    }

    public function players($id,UsersRepository $users)
    {
        $user = $users->getUserInTeam(Auth::user()->in_team);

        return view('auth.game.players',[
            'id'    => $id,
            'users' => $user,
        ]);
    }
}
