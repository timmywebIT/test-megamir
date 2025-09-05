// resources/js/components/BookList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/books')
            .then(response => {
                setBooks(response.data.data || response.data); // зависит от структуры API
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка при загрузке книг:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Загрузка книг...</p>;

    return (
        <div>
            <h2>Список книг</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id} style={{ marginBottom: '1rem' }}>
                        <strong>{book.title}</strong> — {book.author}
                        <br />
                        <em>{book.genre}</em>
                        <p>{book.description?.slice(0, 50)}...</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
