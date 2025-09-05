import React, { useState } from 'react';
import useCreateReview from '../../hooks/Reviews/useCreateReview';

export default function ReviewForm({ bookId, onReviewAdded }) {
    const [username, setUsername] = useState('');
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const { submitReview, loading, error } = useCreateReview(bookId, onReviewAdded);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim()) {
            alert('Пожалуйста, укажите имя.');
            return;
        }

        if (username.length > 50) {
            alert('Имя не должно превышать 50 символов.');
            return;
        }

        if (rating < 1 || rating > 5) {
            alert('Оценка должна быть от 1 до 5.');
            return;
        }

        const reviewData = { username, rating, comment };
        await submitReview(reviewData);
        setUsername('');
        setRating(5);
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit} noValidate style={{ marginTop: '2rem' }}>
            <h3>Оставить отзыв</h3>

            {error && (
                <p style={{ color: 'red' }}>
                    Ошибка: {error.message || 'Не удалось отправить отзыв.'}
                </p>
            )}

            <input
                type="text"
                placeholder="Ваше имя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <br />
            <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                required
            />
            <br />
            <textarea
                placeholder="Комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <br />
            <button type="submit" disabled={loading}>
                {loading ? 'Отправка...' : 'Отправить'}
            </button>
        </form>
    );
}
