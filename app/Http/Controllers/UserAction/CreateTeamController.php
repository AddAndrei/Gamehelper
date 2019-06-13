<?php

namespace App\Http\Controllers\UserAction;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\CreateTeamRepository;

class CreateTeamController extends Controller
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
    public function index(Request $request,CreateTeamRepository $roles)
    {
        $collection = $roles->getDefaultRoles();

        return view('auth.teams',['collection'=>$collection]);
    }
}
