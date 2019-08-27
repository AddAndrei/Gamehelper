<?php


namespace App\Repositories;
use App\Models\Games as Model;
use Illuminate\Support\Facades\Auth;

class HomeRepository extends CoreRepository
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
     * @return mixed
     * если у пользователя есть игры которые он создавал сам
     */
    public function getUserGames()
    {
        return $this->startCondintions()
            ->where('user','=',Auth::id())
            ->orderBy('id','desc')
            ->with(['typeGame','getTeams'])
            ->paginate(10);

    }
    /**
     * @param $id
     * @return mixed
     */
    public function getGame($id)
    {
        return $this->startCondintions()
            ->where('id','=',$id)
            ->with(['typeGame'])
            ->get();
    }



}
