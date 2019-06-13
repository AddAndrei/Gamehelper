<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('family');
            $table->string('email')->unique()->nullable();
            $table->string('sity')->comment('Город');
            $table->string('invoking')->comment('Позывной пользователя используется для отображения списка игроков в играх');
            $table->string('mobile')->comment('Телефон пользователя')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->bigInteger('in_game')->comment('В какой игре пользователь')->nullable();
            $table->bigInteger('in_role')->comment('В качестве какой роли играет')->nullable();
            $table->bigInteger('in_team')->comment('В какой команде')->nullable();
            $table->string('password');
            $table->timestamp('last_visit')->nullable()->comment('Последний визит');
            $table->ipAddress('ip')->comment('IP Пользователя');
            $table->boolean('warning')->comment('Что то связано с ботами')->default(false);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
