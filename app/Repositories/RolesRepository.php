<?php


namespace App\Repositories;
use App\Models\Role as Model;

class RolesRepository extends CoreRepository
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
     * @param $roles
     * @param $gameId
     */
    public function createRole($roles,$gameId)
    {
        if(!empty($roles))
        {
            foreach ($roles as $role) {
                $this->startCondintions()->create([
                    'title' => $role['title'],
                    'description' => $role['description'],
                    'icon' => $role['icon'],
                    'default' => ($role['default'] == "true") ? true : false,
                    'game' => $gameId
                ]);
            }
        }
    }

    /**
     * @param $id
     * @param null $select
     * @return mixed
     */
    public function getRole($id,$select = null)
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

    /****************************Dispatcher********************************************/
    /**
     * dispatcher
     * @param $idGame
     * @return mixed
     */
    public function getRoles($idGame)
    {
        return $this->startCondintions()
            ->select(['title','id','icon'])
            ->where('game','=',$idGame)
            ->get();
    }



}
