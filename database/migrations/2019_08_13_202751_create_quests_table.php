<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('title');
            $table->text('description');
            $table->tinyInteger('variants');
            $table->bigInteger('parent')->nullable();
            $table->dateTime('start');
            $table->dateTime('end');
            $table->bigInteger('team')->default(0);
            $table->bigInteger('role')->default(0);
            $table->bigInteger('user')->default(0);
            $table->integer('score')->default(0);
            $table->string('image')->default('');
            $table->json('coords')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quests');
    }
}
