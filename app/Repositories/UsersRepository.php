<?php


namespace App\Repositories;
use App\Models\User as Model;

class UsersRepository extends CoreRepository
{

    /**
     * @return mixed
     */
    protected function getModelClass()
    {
        // TODO: Implement getModelClass() method.
        return Model::class;
    }

    /**
     * @param $team
     * @return mixed
     */
    public function getUserInTeam($team)
    {
        return $this->startCondintions()
            ->select(['invoking','score','id','in_role','score'])
            ->with(['getRole'])
            ->where('in_team','=',$team)
            ->get();
    }

    /**
     * @param $user
     * @param $newrole
     */
    public function setRole($user,$newrole)
    {
        $this->startCondintions()
            ->where('id','=',$user)
            ->update([
                'in_role'=>$newrole
            ]);
    }

    /**
     * @param $user
     * @param $newteam
     */
    public function setTeam($user,$newteam)
    {
        $this->startCondintions()
            ->where('id','=',$user)
            ->update([
               'in_team'=> $newteam
            ]);
    }
}
