import {useState, useEffect} from "react";
import axios from "axios";

export default function useBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
       const fetchBooks = async () => {
           try {
               const res = await axios.get('/api/books');
               setBooks(res.data.data)
           } catch (error) {
               console.error('Ошибка при загрузке книг', error)
           }
       }
        fetchBooks()

    }, []);
    return {books}
}
