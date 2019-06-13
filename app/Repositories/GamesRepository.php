<?php

namespace App\Repositories;

use App\Models\Games as Model;
use Illuminate\Database\Eloquent\Collection;


class GamesRepository extends CoreRepository{



    /**
     *@return string
     */
    protected function getModelClass()
    {
        return Model::class;
    }
    /**
     * @return All games
     */
    public function getAllActiveGames()
    {
        return $this->startCondintions()->all();
    }



}

?>
