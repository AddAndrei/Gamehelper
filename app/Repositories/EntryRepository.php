<?php


namespace App\Repositories;
use App\Models\Games as Model;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
class EntryRepository extends CoreRepository
{

    private $team;
    /**
     * @return mixed
     */
    protected function getModelClass()
    {
        // TODO: Implement getModelClass() method.
        $this->team = app(TeamsRepository::class);
        return Model::class;
    }


    /**
     * Войти в команду
     * @param $data
     * @return string
     */
    public function entryGame($data)
    {
        $game =  $this->startCondintions()
            ->where('id','=',(int)$data['game'])
            ->with(['getRoles'])
            ->get();
        if($data['password'] === null){
            User::where('id','=',Auth::id())
                ->update([
                    'in_game' => (int)$data['game'],
                    'in_team' => (int)$data['team'],
                    'in_role' => (int)$game[0]->getRoles[0]->id
                ]);
            return 'ok';
        }else{
            $team = $this->team->Team((int)$data['team']);
            if($team[0]['password'] === $data['password']){
                User::where('id','=',Auth::id())
                    ->update([
                        'in_game' => (int)$data['game'],
                        'in_team' => (int)$data['team'],
                        'in_role' => (int)$game[0]->getRoles[0]->id
                    ]);
                return 'ok';
            }else{
                return 'Пароль неверный';
            }
        }
    }



}
