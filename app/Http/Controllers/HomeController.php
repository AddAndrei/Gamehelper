<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
    public function index()
    {
        //говнокодик подъехал
        /*$data = [
            'name' => $request->user()->name,
            'family' => $request->user()->family,
            'sity' => $request->user()->sity,
            'invoking' => $request->user()->invoking,
            'mobile' => $request->user()->mobile,
        ];*/

        //die("<pre>".print_r($user,true)."</pre>");
        //dd($data);
        //dd(Auth::user()->in_game);

        return view('home');
    }
}
