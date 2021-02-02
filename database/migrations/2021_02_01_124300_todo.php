<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Todo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->increments( 'id');
            $table->string('title');
            $table->boolean('status');
            $table->timestamps();
        });
        DB::table('todos')->insert(
            array(
                'title' => 'Play dota2',
                'status'  =>false
            )
        );
        DB::table('todos')->insert(
            array(
                'title'=>'Write code',
                'status'=>true
            )
        );
        DB::table('todos')->insert(
            array(
                'title'=>'Do homework',
                'status'=>false
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
