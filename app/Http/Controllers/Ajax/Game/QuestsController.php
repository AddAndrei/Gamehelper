<?php


namespace App\Http\Controllers\Ajax\Game;


use App\Repositories\QuestsRepository;
use Illuminate\Support\Facades\Auth;

class QuestsController extends BaseController
{
    private $quest;
    public function __construct()
    {
        parent::__construct();
        $this->quest = app(QuestsRepository::class);
    }

    public function quests()
    {
        return $this->quest->getQuests(Auth::user()->in_game);
    }
}
