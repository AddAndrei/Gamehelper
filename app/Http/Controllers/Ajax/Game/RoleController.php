<?php


namespace App\Http\Controllers\Ajax\Game;


use App\Repositories\UsersRepository;
use Illuminate\Http\Request;

class RoleController extends BaseController
{
    public function __construct()
    {
        parent::__construct();
    }


    /**
     * @param Request $request
     * @param UsersRepository $user
     *
     */
    public function setrole(Request $request,UsersRepository $user)
    {
        $user->setRole($request->post('user'),$request->post('role'));
    }

    /**
     * @param Request $request
     * @param UsersRepository $user
     */
    public function setteam(Request $request,UsersRepository $user)
    {
        $user->setTeam($request->post('user'),$request->post('team'));
    }
}
