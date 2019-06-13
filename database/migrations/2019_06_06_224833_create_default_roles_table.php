<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDefaultRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('default_roles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title')->comment('Название роли');
            $table->text('description')->comment('Описание роли')->nullable();
            $table->string('icon')->comment('Иконка роли');
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
        Schema::dropIfExists('default_roles');
    }
}
