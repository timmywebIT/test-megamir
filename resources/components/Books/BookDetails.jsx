import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../Reviews/ReviewForm';
import useBook from '../../hooks/Books/useBook';
import styles from './css/BookDetails.module.css';

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
        <div className={styles.container}>
            <h2 className={styles.heading}>{book.name}</h2>
            <div className={styles.meta}>
                <p><strong>Автор:</strong> {book.author}</p>
                <p><strong>Жанр:</strong> {book.genre}</p>
                <p><strong>Год:</strong> {book.year}</p>
            </div>
            <p className={styles.description}>{book.description}</p>

            <h3>Отзывы:</h3>
            <ul className={styles.reviewList}>
                {reviews.map(review => (
                    <li key={review.id} className={styles.reviewItem}>
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

