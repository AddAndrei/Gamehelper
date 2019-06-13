<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGameOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_options', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->boolean('default_options')->default(true)->comment('Дефолтная настройка нового типа игр');
            $table->boolean('accessibility')->default(true)->comment('Доступность игры');
            $table->unsignedBigInteger('typegame')->comment('Тип игры, ссыдается на таблицу типы игры');
            $table->boolean('showscore')->default(true)->comment('Показывать очки абсолютно всем командам');
            $table->boolean('title')->comment('Название игры')->default(true);
            $table->boolean('description')->comment('Описание игры')->default(true);
            $table->boolean('startgame')->default(true)->comment('Начало игры');
            $table->boolean('sity')->default(true)->comment('Указывать название города');
            $table->boolean('teams')->default(true)->comment('Создавать команды');
            $table->unsignedBigInteger('team_options')->comment('Настройка для команнд');
            $table->boolean('map')->default(true)->comment('Установить карту для создания игры');
            $table->boolean('objects')->default(true)->comment('Возможность ставить объекты на карту');
            $table->boolean('create_self_object')->default(true)->comment('Возможность создавать свои объекты');
            $table->boolean('logo')->default(true)->comment('Возможность загружать логотип для игры');

            $table->timestamps();


            $table->foreign('typegame')->references('id')->on('game_types');//категория игры
            $table->foreign('team_options')->references('id')->on('team_options');//настройки для команд игры
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_options');
    }
}
