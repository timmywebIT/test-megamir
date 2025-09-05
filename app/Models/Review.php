<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $table = 'reviews';
    protected $guarded = [];

    public function books()
    {
        return $this->belongsTo(Book::class);
    }
}
