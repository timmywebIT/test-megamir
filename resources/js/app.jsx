import React from 'react';
import { createRoot } from 'react-dom/client';

// 👇 Вот здесь ты определяешь компонент App
function App() {
    return <h1>Привет, React работает!</h1>;
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
