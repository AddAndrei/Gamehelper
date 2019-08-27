<?php


namespace App\Repositories;
use App\Models\Map as Model;

class MapsRepository extends CoreRepository
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
     * @param $map
     * @return mixed
     */
    public function createMap($map)
    {
        return $this->startCondintions()->create([
            'center'=>json_encode($map['center']),
            'polygon'=>(!empty($map['polygons'])) ? json_encode($map['polygons']) : null,
            'zoom'=>(int)$map['zoom']
        ]);
    }





}
