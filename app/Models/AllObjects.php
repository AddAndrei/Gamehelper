<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AllObjects extends Model
{
    //
    protected $fillable = [
        'title','status','coords','map_in_game'
    ];
}
