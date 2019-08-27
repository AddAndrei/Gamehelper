<?php


namespace App\Repositories;
use App\Models\AllObjects as Model;

class AllObjectsRepository extends CoreRepository
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
     * @param $objects
     * @param $mapId
     */
    public function createObject($objects,$mapId)
    {
        if(!empty($objects)){
            foreach ( $objects as $obj) {
                $this->startCondintions()->create([
                    'title' => $obj['title'],
                    'status' => ($obj['map'] == "true") ? 1 : 0,
                    'coords' => json_encode($obj['coords']),
                    'map_in_game' => $mapId
                ]);
            }
        }
    }




}
