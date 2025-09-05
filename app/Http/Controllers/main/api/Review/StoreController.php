<?php

namespace App\Http\Controllers\Main\api\Review;

use App\Http\Controllers\Controller;


class StoreController extends Controller
{
    public function __invoke()
    {
        return response()->json('Мы тут');
    }
}
