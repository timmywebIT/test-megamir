<?php

use App\Http\Controllers\Main\api\Book\IndexController;
use App\Http\Controllers\Main\api\Book\ShowController;
use Illuminate\Support\Facades\Route;

Route::get('/books', IndexController::class);
Route::get('/books/{book}', ShowController::class);
