import {useState, useEffect} from "react";
import axios from "axios";

export default function useBooks() {
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
       const fetchBooks = async () => {
           try {
               const res = await axios.get('/api/books');
               setBooks(res.data.data)
           } catch (error) {
               console.error('Ошибка при загрузке книг', error)
               setError(error)
           }
       }
        fetchBooks()

    }, []);
    return { books, error }
}
