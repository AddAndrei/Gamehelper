<?php


namespace App\Services;

use App\Repositories\RolesRepository;
use App\Repositories\TeamsRepository;
use App\Repositories\GamesRepository;
class InGameService
{
    private $role;
    private $team;
    private $game;
    public function __construct()
    {
        $this->game = app(GamesRepository::class);
        $this->team = app(TeamsRepository::class);
        $this->role = app(RolesRepository::class);
    }


    /**
     * @param $gameid
     * @param $teamId
     * @param $roleId
     * @return array
     */
    public function ingame($gameid,$teamId,$roleId)
    {
        $game = $this->game->getUserGame($gameid);
        $team = $this->team->Team($teamId,['color','title','id']);
        $role = $this->role->getRole($roleId,['title','id','icon']);
        return [
            'game' => $game,
            'team' => $team,
            'role' => $role
        ];
    }

}
