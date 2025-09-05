<?php

namespace App\Http\Requests\Review;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'username' => 'required|string|max:50',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string',
        ];
    }
    public function messages(): array
    {
        return [
            'username.required' => 'Пожалуйста, укажите имя.',
            'username.max' => 'Имя не должно превышать 50 символов.',
            'rating.required' => 'Поставьте оценку от 1 до 5.',
            'rating.min' => 'Минимальная оценка — 1.',
            'rating.max' => 'Максимальная оценка — 5.',
        ];
    }
}
