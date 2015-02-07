<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class YelpBusiness extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('YelpBusiness', function(Blueprint $table)
		{
			$table->increments('Id');
			$table->string('Name');
			$table->string('FullAddress');
			$table->boolean('Open');
			$table->string('Categories');
			$table->integer('ReviewCount');
			$table->float('Latitude');
			$table->float('Longitude');
			$table->float('Stars');
			$table->json('Attributes');
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
		Schema::drop('YelpBusiness');
	}

}
