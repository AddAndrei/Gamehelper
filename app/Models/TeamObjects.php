<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamObjects extends Model
{
    //
    protected $fillable =[
        'title','description','status','coords','map_in_game','in_team'
    ];


    public function inTeam()
    {
        return $this->hasMany(Team::class,'id','in_team');

    }
}
