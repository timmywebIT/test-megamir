// resources/js/components/BookList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../hooks/useBooks'; // 👈 используем хук

export default function BookList() {
    const { books, loading } = useBooks();

    if (loading) return <p>Загрузка книг...</p>;

    return (
        <div>
            <h2>Список книг</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id} style={{ marginBottom: '1rem' }}>
                        <Link to={`/books/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div>
                                <strong>{book.title}</strong>
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
