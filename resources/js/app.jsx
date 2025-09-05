import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from '../components/BookList';
import BookDetails from '../components/BookDetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/books" element={<BookList />} />
                <Route path="/books/:id" element={<BookDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
