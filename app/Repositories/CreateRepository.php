<?php

namespace App\Repositories;

use App\Models\GameType as Model;
use App\Models\GameOptions;


use Illuminate\Database\Eloquent\Collection;

class CreateRepository extends CoreRepository{
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
    public function getAllType()
    {
        return $this->startCondintions()->all();
    }


}
