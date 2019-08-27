<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quest extends Model
{
    //
    protected $fillable = [
        'title','description','variants',
        'parent','start','end','team',
        'role','user','score','image',
        'coords','game'
    ];
}
