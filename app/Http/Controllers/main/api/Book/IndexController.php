<?php

namespace App\Http\Controllers\Main\api\Book;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Book;

class IndexController extends Controller
{
    public function __invoke()
    {
        return BookResource::collection(Book::all());
    }
}
