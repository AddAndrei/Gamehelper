<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team_options', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->boolean('title')->default(true)->comment('Название команды');
            $table->boolean('roles')->comment('Включить роли')->default(true);
            $table->boolean('add_role')->default(true)->comment('Добавлять новые роли');
            $table->boolean('team_color')->default(true)->comment('Выбор цвета команды');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('team_options');
    }
}
