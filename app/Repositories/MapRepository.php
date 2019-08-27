<?php

namespace App\Repositories;

use App\Models\DefaultObjects as Model;
use Illuminate\Database\Eloquent\Collection;

class MapRepository extends CoreRepository{
     /**
     *@return string
     */
    protected function getModelClass()
    {
        return Model::class;
    }
    /**
     * Получение всех типов игр и их настройки
     */
    public function getDefaultObjects()
    {
        return $this->startCondintions()->get('title');
    }





}
