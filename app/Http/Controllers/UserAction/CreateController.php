<?php

namespace App\Http\Controllers\UserAction;




use App\Repositories\CreateRepository;
use App\Repositories\CreateTeamRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class CreateController extends BaseController
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     *@return view
     */
    public function index(CreateRepository $create)
    {
        date_default_timezone_set('Europe/Moscow');
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
