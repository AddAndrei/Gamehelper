<?php

namespace App\Http\Controllers\UserAction;

use Illuminate\Http\Request;


class HistoryController extends BaseController
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('auth.history');
    }


}
