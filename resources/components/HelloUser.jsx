import React from 'react';

export default function HelloUser({ name }) {
    return <p>Привет, {name || 'гость'}!</p>;
}
