<?php

namespace App\Http\Controllers\UserAction;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\CreateRepository;
use App\Repositories\CreateTeamRepository;
use Illuminate\Support\Facades\Auth;

class CreateController extends Controller
{
    //
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
     *@return view
     */
    public function index(CreateRepository $create)
    {
        $items = $create->getAllType();
        return view('auth.create',compact('items'));
    }



    /**
     *
     */
    public function teams(CreateTeamRepository $roles)
    {
        $collection = $roles->getDefaultRoles();
        return view('auth.teams',['collection'=>$collection]);
    }
}
