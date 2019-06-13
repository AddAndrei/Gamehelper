<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/games', 'UserAction\GamesController@index')->name('games');
Route::get('/create', 'UserAction\CreateController@index')->name('create');
Route::get('/teams' ,'UserAction\CreateController@teams')->name('teams');

Route::post('/teams', 'UserAction\CreateTeamController@index')->name('createteams');
Route::get('/map', 'UserAction\MapController@index')->name('map');
Route::post('/createmap','UserAction\MapController@create')->name('createmap');

