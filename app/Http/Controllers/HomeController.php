<?php

namespace App\Http\Controllers;


use App\Repositories\HomeRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
class HomeController extends Controller
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
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(HomeRepository $userGames)
    {
        $games = $userGames->getUserGames();
        return view('home',[
                        'games'=>$games->items(),
                        'paginator' => $games
                    ]);
    }

    /**
     * @param $id
     * @param GamesRepository $game
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function view($id,HomeRepository $game)
    {
        $data = $game->getGame((int)$id);
        //dd($data);
        return view('auth.view',['game'=>$data->all()]);
    }

    /**
     * @param $id
     * @param GamesRepository $game
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($id,HomeRepository $game)
    {
        $data = $game->getGame((int)$id);

        return view('auth.edit');
    }

    /**
     * @param $id
     */
    public function destroy($id)
    {
        dd($id);
    }

    public function exitgame()
    {
        User::where('id','=',Auth::id())
            ->update(['in_game'=>null,'in_role'=>null,'in_team'=>null,'score'=>0]);
        return redirect('/home');
    }


}
