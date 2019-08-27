<?php


namespace App\Http\Controllers\Ajax;
use App\Repositories\GamesRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetDataController extends BaseController
{
    /**
     * GetDataController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * @param Request $request
     * @param GamesRepository $game
     * @return mixed
     */
    public function entrygame(Request $request,GamesRepository $game)
    {
        return $game->getGame($request->post('game'));
    }
}
