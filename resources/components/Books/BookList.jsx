import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../../hooks/Books/useBooks';
import styles from './css/BookList.module.css';

export default function BookList() {
    const { books, error } = useBooks();

    if (error) return <p>Не удалось загрузить книги. Попробуйте позже.</p>;

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Список книг</h2>
            <ul className={styles.list}>
                {books.map(book => (
                    <li key={book.id} className={styles.card}>
                        <Link to={`/books/${book.id}`} className={styles.link}>
                            <div>
                                <strong className={styles.title}>{book.title}</strong>
                                <p><strong>Автор:</strong> {book.author}</p>
                                <p><strong>Жанр:</strong> {book.genre}</p>
                                <p><strong>Описание:</strong> {book.description?.slice(0, 50)}...</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
