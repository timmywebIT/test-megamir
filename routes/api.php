<?php

use App\Http\Controllers\Main\api\Book\IndexController;
use App\Http\Controllers\Main\api\Book\ShowController;
use App\Http\Controllers\Main\api\Review\StoreController;
use Illuminate\Support\Facades\Route;

Route::get('/books', IndexController::class);
Route::get('/books/{book}', ShowController::class);
Route::get('/books/{book}/reviews', StoreController::class);
