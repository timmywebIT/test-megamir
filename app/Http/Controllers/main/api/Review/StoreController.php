<?php

namespace App\Http\Controllers\Main\api\Review;

use App\Http\Controllers\Controller;
use App\Http\Requests\Review\StoreRequest;
use App\Models\Review;


class StoreController extends Controller
{
    public function __invoke(StoreRequest $request, $id)
    {
        $data = $request->validated();
        $data['book_id'] = $id;

        $review = Review::create($data);

        return response()->json([
            'success' => true,
            'review' => $review
        ]);
    }
}
