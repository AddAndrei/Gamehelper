<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAllObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('all_objects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('map_in_game')->comment('Общие объекты для какой то игры');
            $table->string('title',50)->comment('Название объекта');
            $table->tinyInteger('status')->default(0)->comment('Статус для объектов');
            $table->json('coords')->comment('Расположение объекта на карте');
            $table->timestamps();

            $table->foreign('map_in_game')->references('id')->on('maps');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('all_objects');
    }
}
