<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePengirimanpenjualansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pengirimanpenjualans', function (Blueprint $table) {
            $table->increments('id');
            $table->string('no_transaksi');
            $table->date('tanggal');
            $table->integer('name');
            $table->integer('pesanan');
            $table->integer('quantity');
            $table->integer('nilai');
            $table->string('invoice');
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
        Schema::dropIfExists('pengirimanpenjualans');
    }
}
