<?php

namespace App\Http\Controllers\main\api\Book;

use App\Http\Controllers\Controller;
use App\Models\Book;


class ShowController extends Controller
{
    public function __invoke($id)
    {
        $book = Book::findOrFail($id);
        return response()->json(['data' => $book]);
    }
}
