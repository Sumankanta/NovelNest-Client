import React, { useEffect } from 'react'
import BookCards from '../components/BookCards';
import { useState } from 'react';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect( () =>{
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(9,20)))
    },[])
  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks