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
#home page
Route::get('/home', 'HomeController@index')->name('home');
/****************************Distpatcher*********************************/
Route::get('/view/{id}','HomeController@view')->name('view');
Route::get('/view/{id}/teams','HomeController@view')->name('gameteams');
Route::get('/view/{id}/map','HomeController@view')->name('mapgame');
//Route::get(['/view/{id}','/view/{id}/teams','/view/{id}/map'],'HomeController@view')->names(['view','gameteams','mapgame']);
/************************************************************/
Route::get('/edit/{id}','HomeController@edit')->name('edit');
Route::get('/delete/{id}','HomeController@destroy')->name('delete');
#games
Route::get('/games', 'UserAction\GamesController@index')->name('games');
Route::get('/create', 'UserAction\CreateController@index')->name('create');
#создание комманд
Route::get('/teams' ,'UserAction\CreateController@teams')->name('teams');
Route::post('/teams', 'UserAction\CreateTeamController@index')->name('createteams');
#карта игровая
Route::get('/map', 'UserAction\MapController@index')->name('map');
Route::post('/createmap','UserAction\MapController@create')->name('createmap');
#квесты
Route::get('/quests','UserAction\QuestsController@index')->name('quests');

#Страница помощи
Route::get('/help','UserAction\HelpController@index')->name('help');
#Страница истории игр
Route::get('/history','UserAction\HistoryController@index')->name('history');

#сама игра
Route::get('/game/{id}/quests','UserGame\GameController@index')->name('game');
Route::get('/game/{id}/map','UserGame\GameController@map')->name('gamemap');
Route::get('/game/{id}/stat','UserGame\GameController@stat')->name('stat');
Route::get('/game/{id}/chat','UserGame\GameController@chat')->name('chat');
Route::get('/game/{id}/players','UserGame\GameController@players')->name('players');
#Выход из игры
Route::get('/exitgame','HomeController@exitgame')->name('exit');
#Предосмотр игр
Route::get('/lookgame/{id}','UserAction\LookController@viewgame')->name('lookgame');


/************************AJAX*************************/
Route::post('/creategame','Ajax\CreateGameController@create');
Route::post('/getgame','Ajax\GetDataController@entrygame');
Route::post('/entry','Ajax\EntryGameController@entry');
Route::post('/ingame','Ajax\InGameController@ingame');
Route::post('/gamemap','Ajax\GameMapController@index');

/**********************Game ajax***************************/
Route::post('/getquests','Ajax\Game\QuestsController@quests');
Route::post('/getteams','Ajax\Game\TeamsController@teams');
Route::post('/setrole','Ajax\Game\RoleController@setrole');
Route::post('/setteam','Ajax\Game\RoleController@setteam');
Route::post('/mapdispatch','Ajax\Game\MapController');
