<?php

namespace App\Http\Controllers\UserAction;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MapController extends Controller
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
    public function index()
    {
        return view('auth.map');
    }
    /**
     *
     */
    public function create(Request $request)
    {
        
    }
}
