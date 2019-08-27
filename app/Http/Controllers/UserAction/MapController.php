<?php

namespace App\Http\Controllers\UserAction;

use App\Http\Controllers\Controller;
use App\Repositories\MapRepository;
use Illuminate\Support\Facades\Auth;

class MapController extends BaseController
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
    public function index(MapRepository $collection)
    {

        $objects = $collection->getDefaultObjects();
        return view('auth.map',['defaultobjects'=>$objects]);
    }
    /**
     *
     */
    public function create(MapRepository $collection)
    {

        $objects = $collection->getDefaultObjects();
        return view('auth.map',['defaultobjects'=>$objects]);
    }

}
