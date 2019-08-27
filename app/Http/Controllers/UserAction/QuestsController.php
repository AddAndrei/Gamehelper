<?php

namespace App\Http\Controllers\UserAction;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestsController extends BaseController
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     *
     */
    public function index()
    {
        date_default_timezone_set('Europe/Moscow');
        return view('auth.quests');
    }
}
