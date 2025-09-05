<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Main\Book\IndexController;

Route::get('/books', IndexController::class);
