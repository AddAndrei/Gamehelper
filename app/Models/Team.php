<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $table = 'teams';
    //
    protected $fillable = [
        'title','color','password','game'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function getObjects()
    {
        return $this->hasMany(TeamObjects::class,'in_team','id');
    }

    public function getUsers()
    {
        return $this->hasMany(User::class,'in_team','id')
            ->select(['in_team','id','invoking','in_role','score'])
            ->with(['getRole']);
    }


}
