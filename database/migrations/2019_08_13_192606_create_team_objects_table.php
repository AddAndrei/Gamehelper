<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team_objects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('title');
            $table->text('description');
            $table->tinyInteger('status')->comment('Установлено или нет');
            $table->json('coords')->nullable();
            $table->unsignedBigInteger('map_in_game')->comment('К какой карте принадлежит объект');
            $table->unsignedBigInteger('in_team')->comment('К какой команде принадлежит объект');

            $table->foreign('map_in_game')->references('id')->on('maps');
            $table->foreign('in_team')->references('id')->on('teams');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('team_objects');
    }
}
