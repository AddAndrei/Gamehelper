<?php

namespace App\Http\Controllers\UserAction;



use App\Http\Controllers\Controller;
use App\Repositories\CreateTeamRepository;

class CreateTeamController extends BaseController
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

    //
    public function index(CreateTeamRepository $roles)
    {
        $collection = $roles->getDefaultRoles();


        return view('auth.teams',['collection'=>$collection]);
    }
}
