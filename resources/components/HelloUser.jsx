import React, { useState, useEffect } from 'react';

export default function HelloUser() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('Привет, гость!');

    // useEffect срабатывает каждый раз, когда name меняется
    useEffect(() => {
        if (name.trim()) {
            setGreeting(`Привет, ${name}!`);
        } else {
            setGreeting('Привет, гость!');
        }
    }, [name]);

    return (
        <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
            <h2>{greeting}</h2>
            <input
                type="text"
                placeholder="Введите ваше имя"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ padding: '0.5rem', fontSize: '1rem' }}
            />
        </div>
    );
}
