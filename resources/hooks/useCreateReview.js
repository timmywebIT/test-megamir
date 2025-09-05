import { useState } from 'react';
import axios from 'axios';

export default function useReviewSubmit(bookId, onSuccess) {
    const [loading, setLoading] = useState(false);

    const submitReview = async (reviewData) => {
        setLoading(true);
        try {
            const res = await axios.post(`/api/books/${bookId}/reviews`, reviewData);
            onSuccess(res.data); //
        } catch (err) {
            console.error('Ошибка при отправке отзыва:', err);
        } finally {
            setLoading(false);
        }
    };

    return { submitReview, loading };
}
