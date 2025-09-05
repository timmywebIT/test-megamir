<?php

namespace App\Http\Controllers\main\api\Book;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Book;


class ShowController extends Controller
{
    public function __invoke($id)
    {
        $book = Book::with('reviews')->findOrFail($id);
        return new BookResource($book);
    }
}
