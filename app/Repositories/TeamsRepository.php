<?php


namespace App\Repositories;
use App\Models\Team as Model;


class TeamsRepository extends CoreRepository
{

    /**
     * @return mixed
     */
    private $teamObjects;
    protected function getModelClass()
    {
        // TODO: Implement getModelClass() method.
        $this->teamObjects = app(TeamObjectsRepository::class);
        return Model::class;
    }


    /**
     * Создает команды и их объекты
     * @param $teams
     * @param $gameid
     * @param $teamObjects
     * @param $mapid
     * @return mixed
     */
    public function createTeam($teams,$gameid,$teamObjects,$mapid)
    {
        if(!empty($teams)) {
            foreach ($teams as $team) {
                $t = $this->startCondintions()->create([
                    'title' => $team['title'],
                    'color' => $team['color'],
                    'password' => ($team['password'] == null) ? null : $team['password'],
                    'game' => $gameid
                ]);
                if(!empty($teamObjects)){
                    foreach ($teamObjects as $teamObject) {
                        if ($t->title === $teamObject['team']) {
                            $this->teamObjects->createTeamObject($t->id, $teamObject, $mapid);
                        }
                    }
                }

            }
        }
    }

    /**
     * @param $id
     * @return mixed
     */
    public function Team($id,$select = null)
    {
        if($select!=null){
            return $this->startCondintions()
                ->select($select)
                ->where('id','=',$id)
                ->get();
        }else{
            return $this->startCondintions()
                ->where('id','=',$id)
                ->get();
        }

    }

    /**
     * @param $idGame
     * @return mixed
     */
    public function getTeams($idGame)
    {
        return $this->startCondintions()
            ->select(['color','id','password','title','score'])
            ->where('game','=',$idGame)
            ->with(['getUsers'])
            ->get();
    }


}
