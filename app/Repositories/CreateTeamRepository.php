<?php

namespace App\Repositories;

use App\Models\DefaultRoles as Model;
use Illuminate\Database\Eloquent\Collection;

class CreateTeamRepository extends CoreRepository{
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
    public function getDefaultRoles()
    {
        return $this->startCondintions()->all();
    }
}
