<?php

use App\Http\Controllers\userController;
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

Route::post("/login",[userController::class,"index"]);
Route::post("/create",[userController::class,"create"]);
Route::get("/flashDeals",[userController::class,"flashDeals"]);
Route::get("/topProducts",[userController::class,"topProducts"]);
Route::get("/newProducts",[userController::class,"newProducts"]);

//user profile
Route::post("/profile",[userController::class,"profile"]);


Route::post("/logout",[userController::class,"logout"]);



//trademark
Route::get("/trademark/adidas",[userController::class,"adidas"]);


//category
Route::get("/category/pageNumber={page}",[userController::class,"category"]);
Route::post("/category/search",[userController::class,"categorySearch"]);
