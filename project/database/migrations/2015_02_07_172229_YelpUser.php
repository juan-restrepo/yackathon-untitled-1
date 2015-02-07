<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class YelpUser extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('YelpUser', function(Blueprint $table)
		{
			$table->increments('Id');
			$table->string('Name');
			$table->integer('ReviewCount');
			$table->string('YelpingSince');
			$table->integer('Fans');
			$table->float('AverageStars');
			$table->string('Elite');
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
		Schema::drop('YelpUser');
	}

}
