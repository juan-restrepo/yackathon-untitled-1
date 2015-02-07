<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class YelpReview extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('YelpReview', function(Blueprint $table)
		{
			$table->increments('Id');
			$table->string('BusinessId');
			$table->string('UserId');
			$table->string('Date');
			$table->string('Text');
			$table->float('Stars');
			$table->json('Votes');
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
		Schema::drop('YelpReview');
	}

}
