<?php


namespace App\Http\Controllers\Ajax\Game;


use App\Models\Role;
use App\Repositories\RolesRepository;
use App\Repositories\TeamsRepository;
use Illuminate\Http\Request;


class TeamsController extends BaseController
{
    private $teams;
    private $roles;
    public function __construct()
    {
        parent::__construct();
        $this->teams = app(TeamsRepository::class);
        $this->roles = app(RolesRepository::class);
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function teams(Request $request)
    {
        $data =[
            'teams' => $this->teams->getTeams($request->post('game')),
            'roles' => $this->roles->getRoles($request->post('game'))
        ];
        return $data;
    }


}
