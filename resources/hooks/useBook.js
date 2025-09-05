import { useState, useEffect } from "react";
import axios from "axios";

export default function useBook(id) {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchBook = async () => {
        try {
            const res = await axios.get(`/api/books/${id}?include=reviews`);
            setBook(res.data.data);
        } catch (error) {
            console.error('Ошибка при загрузке книги', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBook();
    }, [id]);

    return { book, loading, refetch: fetchBook };
}
