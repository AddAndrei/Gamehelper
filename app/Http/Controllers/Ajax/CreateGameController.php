<?php

namespace App\Http\Controllers\Ajax;


use App\Services\CreateGameService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CreateGameController extends BaseController
{
    /**
     * CreateGameController constructor.
     */
    private $service;
    public function __construct()
    {
        $this->middleware('auth');
        $this->service = app(CreateGameService::class);
    }

    //создать и сохранить игру
    public function create(Request $request)
    {
        return $this->service->createGame($request->all());
    }





























}
