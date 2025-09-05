import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloUser from "../components/HelloUser";

// 👇 Вот здесь ты определяешь компонент App
function App() {
    return (
        <div>
            <h1>Привет, React работает!</h1>
            <HelloUser name="Тимофей" />
        </div>
    );
}
const root = createRoot(document.getElementById('app'));
root.render(<App />);
