import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../Reviews/ReviewForm';
import useBook from '../../hooks/Books/useBook';

export default function BookDetails() {
    const { id } = useParams();
    const { book, loading, refetch, error } = useBook(id);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (book?.reviews) {
            setReviews(book.reviews);
        }
    }, [book]);

    const handleNewReview = (newReview) => {
        refetch(); //
    };

    if (!book) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке книги</p>;

    return (
        <div>
            <h2>{book.name}</h2>
            <p><strong>Автор:</strong> {book.author}</p>
            <p><strong>Жанр:</strong> {book.genre}</p>
            <p><strong>Год:</strong> {book.year}</p>
            <p><strong>Описание:</strong> {book.description}</p>
            <h3>Отзывы:</h3>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <strong>{review.username}</strong> — {review.rating}/5
                        <br />
                        {review.comment}
                    </li>
                ))}
            </ul>
            <ReviewForm bookId={id} onReviewAdded={handleNewReview} />
        </div>
    );
}
