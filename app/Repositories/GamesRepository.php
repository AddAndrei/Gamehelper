<?php

namespace App\Repositories;

use App\Models\Games as Model;
use App\Services\CreateImageService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;


class GamesRepository extends CoreRepository{


    private $obj;
    /**
     *@return string
     */
    protected function getModelClass()
    {
        $this->obj = app(TeamObjectsRepository::class);
        return Model::class;

    }
    /**
     * @return All games
     * Все игры кроме тех что создал юзер
     */
    public function getAllActiveGames()
    {
        date_default_timezone_set('Europe/Moscow');
        return $this->startCondintions()
            //->where('user','!=',Auth::id())
            //->where('start','>',date('Y-m-d H:i:s'))
            ->where('end','>',date('Y-m-d H:i:s'))
            ->orderBy('id','desc')
            ->with(['typeGame','getTeams'])
            ->paginate(5);
    }

    /**
     * @param $data
     * @return mixed
     */
    public function createGame($game,$id)
    {

        $img = (!empty($game['img'])) ? CreateImageService::createImage($game['img'],'../public/gameimages/') : null;

        return $this->startCondintions()->create([
            'title'=>$game['title'],
            'description'=>$game['description'],
            'start'=>$game['start'],
            'end'=>$game['end'],
            'sity'=>(!empty($game['sity'])) ? $game['sity'] : Auth::user()->sity,
            'logo'=>$img,
            'user'=>Auth::user()->id,
            'map'=>$id,
            'type_game'=>(int)$game['type']
        ]);
    }

    /**
     * Вернет данные об игре
     * @param $id
     * @return mixed
     */
    public function getGame($id)
    {
        return $this->startCondintions()
            ->where('id','=',$id)
            ->with(['typeGame','getTeams','Map'])
            ->get();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getUserGame($id)
    {
        return $this->startCondintions()
            ->select(['title','sity','start','end','type_game','id'])
            ->where('id','=',$id)
            ->with(['typeGame'])
            ->get();
    }

    /**
     * @param $id
     * @param $team
     * @return array
     */
    public function getMap($id,$team)
    {
        $game = $this->startCondintions()
            ->where('id','=',$id)
            ->with(['Map'])
            ->get();
        $objects = $this->obj->getTeamObjects($team);
        return [
            'game' => $game,
            'objects' => $objects
        ];
    }
}

?>
