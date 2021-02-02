<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('todos','App\Http\Controllers\Api\TodosController@getTodos');
Route::get('todos/{id}','App\Http\Controllers\Api\TodosController@getTodo');
Route::put('change-status/{id}','App\Http\Controllers\Api\TodosController@changeStatus');
Route::post('add-todo','App\Http\Controllers\Api\TodosController@addTodo');
Route::delete('delete-todo/{id}','App\Http\Controllers\Api\TodosController@deleteTodo');