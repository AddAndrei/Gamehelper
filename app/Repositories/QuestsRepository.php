<?php


namespace App\Repositories;
use App\Models\Quest as Model;
use App\Services\CreateImageService;

class QuestsRepository extends CoreRepository
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
     * @param $quests
     * @param $gameId
     */
    public function createQuest($quests,$gameId)
    {
        if(!empty($quests)){
            foreach($quests as $quest)
            {
                $image = (!empty($quest['image'])) ? CreateImageService::createImage($quest['image'],'../public/questimages/') : null;
                $this->startCondintions()->create([
                    'title'=>$quest['title'],
                    'description' => $quest['description'],
                    'variants'=>(int)$quest['variant'],
                    'parent' => ($quest['parent'] === 'noparents') ? null : $quest['parent'],
                    'start' => $quest['start'],
                    'end' => $quest['end'],
                    'team' => ($quest['team'] === 'Всем') ? 0 : (int)$quest['team'],
                    'role' => ($quest['role'] === 'Всем') ? 0 : (int)$quest['role'],
                    'user' => ($quest['player'] === null) ? 0 : (int)$quest['user'],
                    'score' => ($quest['score'] === null) ? 0 : (int)$quest['score'],
                    'image' => $image,
                    'coords' =>(isset($quest['coords'])) ? json_encode($quest['coords']) : null,
                    'game' => $gameId
                ]);
            }
        }

    }

    public function getQuests($game)
    {
        return $this->startCondintions()
            ->where('game','=',$game)
            ->where('end','>',date('Y-m-d H:i:s'))
            ->where('status','=',null)
            ->get();
    }

}
