<?php


namespace App\Http\Controllers\Ajax\Game;


use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
}
