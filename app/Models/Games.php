<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Games extends Model
{


    protected $fillable = [
        'title','description','sity','map','end','start','type_game','logo','user'
    ];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function typeGame()
    {
        return $this->belongsTo(GameType::class,'type_game','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function getTeams()
    {
        return $this->hasMany(Team::class,'game','id')->with(['getObjects']);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function Map()
    {
        return $this->belongsTo(Map::class,'map','id')->with(['allObjects']);
    }

    public function getRoles()
    {
        return $this->hasMany(Role::class,'game','id')
            ->where('default','=',1);
    }

}
