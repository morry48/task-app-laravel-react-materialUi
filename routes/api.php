<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api'], function(){
    Route::get('posts', 'Api\PostController@index');
    Route::post('create', 'Api\PostController@create');
    Route::post('delete', 'Api\PostController@delete');
    Route::post('edit', 'Api\PostController@edit');
    Route::post('update', 'Api\PostController@update');
});

// Route::get('/posts', 'Api\PostController@index');
// Route::post('/create', 'Api\PostController@create');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
