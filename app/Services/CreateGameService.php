<?php


namespace App\Services;
use App\Repositories\AllObjectsRepository;
use App\Repositories\GamesRepository;
use App\Repositories\MapsRepository;
use App\Repositories\QuestsRepository;
use App\Repositories\RolesRepository;
use App\Repositories\TeamsRepository;

class CreateGameService
{

    private $game;
    private $map;
    private $teams;
    private $roles;
    private $objects;
    private $quests;
    public function __construct()
    {
        $this->map = app(MapsRepository::class);
        $this->game = app(GamesRepository::class);
        $this->teams = app(TeamsRepository::class);
        $this->roles = app(RolesRepository::class);
        $this->objects = app(AllObjectsRepository::class);
        $this->quests = app(QuestsRepository::class);
    }

    /**
     * Создает игру
     * @param $data
     * @return mixed
     */
    public function createGame($data)
    {
        $map = $this->map->createMap($data['map']);
        $game = $this->game->createGame($data['game'],$map->id);
        if(isset($data['objects'])){
            $teamObj = array_filter($data['objects'],function($o){return $o['team']!=='Общий';});
            $all = array_filter($data['objects'],function($o){return $o['team']=="Общий";});
        }else{
            $teamObj = null;
            $all = null;
        }

        $this->teams->createTeam($data['teams'],$game->id,$teamObj,$map->id);
        $this->roles->createRole($data['roles'],$game->id);
        $this->objects->createObject($all,$map->id);

        if(isset($data['quests'])){
            $this->quests->createQuest($data['quests'],$game->id);
        }

        return 'ok';
    }



}
