import { useState } from 'react';
import axios from 'axios';

export default function useReviewSubmit(bookId, onSuccess) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitReview = async (reviewData) => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.post(`/api/books/${bookId}/reviews`, reviewData);
            onSuccess(res.data); //
        } catch (error) {
            console.error('Ошибка при отправке отзыва:', error);
            setError(error)
        } finally {
            setLoading(false);
        }
    };
    return { error, submitReview, loading };
}
