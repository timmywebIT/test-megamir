import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloUser from "../components/HelloUser";
import BookList from '../components/BookList';

// 👇 Вот здесь ты определяешь компонент App
function App() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Привет, React работает!</h1>
            <HelloUser name="Тимофей" />

            <hr style={{ margin: '2rem 0' }} />

            <BookList /> {/* 👈 Вот здесь ты вставляешь компонент списка книг */}
        </div>
    );
}
const root = createRoot(document.getElementById('app'));
root.render(<App />);
