import React, { useState } from 'react';
import axios from 'axios';

export default function ReviewForm({ bookId, onReviewAdded }) {
    const [username, setUsername] = useState('');
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = { username, rating, comment };

        try {
            const res = await axios.post(`/api/books/${bookId}/reviews`, reviewData);
            onReviewAdded(res.data); // 👈 обновляем родительский компонент
            setUsername('');
            setRating(5);
            setComment('');
        } catch (err) {
            console.error('Ошибка при отправке отзыва:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
            <h3>Оставить отзыв</h3>
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
            <button type="submit">Отправить</button>
        </form>
    );
}
