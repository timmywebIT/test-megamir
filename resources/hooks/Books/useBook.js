import { useState, useEffect } from "react";
import axios from "axios";

export default function useBook(id) {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    const fetchBook = async () => {
        setError(null);
        try {
            const res = await axios.get(`/api/books/${id}?include=reviews`);
            setBook(res.data.data);
        } catch (error) {
            console.error('Ошибка при загрузке книги', error);
            setError(error)
        }
    };

    useEffect(() => {
        fetchBook();
    }, [id]);

    return { book, error, refetch: fetchBook };
}
