<?php

namespace App\Http\Controllers\UserAction;




class HelpController extends BaseController
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    //
    public function index()
    {
        return view('auth.help');
    }
}
