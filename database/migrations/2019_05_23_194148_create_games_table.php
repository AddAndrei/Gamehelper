<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title',191);
            $table->unsignedBigInteger('type_game')->comment('Тип игры нужен для настроек');
            $table->text('description')->comment('Описание')->nullable();
            $table->time('start')->comment('Начало игры');
            $table->time('end')->comment('Конец игры');
            $table->string('sity',191)->comment('Город');
            $table->boolean('accessibility')->default(true)->comment('Доступность');
            $table->boolean('score')->default(false)->comment('Отображать очки всем участникам игры');
            $table->unsignedBigInteger('map')->comment('Ссылка на таблицу карт');


            $table->timestamps();

            $table->foreign('type_game')->references('id')->on('game_types');
            $table->foreign('map')->references('id')->on('maps');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}
