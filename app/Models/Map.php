<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Map extends Model
{
    protected $table = 'maps';
    protected $fillable = [
        'center','zoom','polygon',
    ];



    public function allObjects()
    {
        return $this->hasMany(AllObjects::class,'map_in_game','id');
    }
}
