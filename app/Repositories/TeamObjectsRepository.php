<?php


namespace App\Repositories;
use App\Models\TeamObjects as Model;

class TeamObjectsRepository extends CoreRepository
{

    /**
     * @return mixed
     */
    protected function getModelClass()
    {
        // TODO: Implement getModelClass() method.
        return Model::class;
    }



    public function createTeamObject($teamId,$object,$mapId)
    {

        $this->startCondintions()->create([
            'title' => $object['title'],
            'description' => ($object['description']===null) ? '' : $object['description'],
            'status' => ($object['map'] == "true") ? 1 : 0,
            'coords' => json_encode($object['coords']),
            'map_in_game' => $mapId,
            'in_team' => $teamId
        ]);
    }

    /**
     * Карта для игроков в профиле игры
     * @param $inTeam
     * @return mixed
     */
    public function getTeamObjects($inTeam)
    {
        return $this->startCondintions()
            ->where('in_team','=',$inTeam)
            ->with(['inTeam'])
            ->get();
    }

}
