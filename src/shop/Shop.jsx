/* eslint-disable react/jsx-key */
// import React, { useEffect, useState } from 'react'
// import { Card } from "flowbite-react";

// const Shop = () => {
//   const [books, setBooks] = useState([]);

//   useEffect( ()=>{
//     fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
//   }, [])

//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//       <h2 className='text-5xl font-bold text-center'>All Books are here</h2>

//       <div className='grid gap-8 my-12 lg:grid-col-4 sm:grid-cols-3 grid-cols-1 '>
//         {
//           books.map(book => <Card className='hover:shadow-2xl  focus:shadow-red-500 hover:scale-105 '>
//             <img src={book.imageURL} alt=""/>
//             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               <p>{book.bookTitle}</p>
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400"><i>{book.bookDescription}</i>
//             </p>
//               <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
//           </Card>)
//         }
//       </div>
//     </div>
//   )
// }

// export default Shop

import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const truncateDescription = (description, limit) => {
    const words = description.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books Are <span className='text-blue-700'> Here</span></h2>
      <div className='grid gap-8 my-12 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {books.map(book => (
          <Link to={`/book/${book._id}`}>
          <Card
            key={book.id} // Assuming book has a unique id, adjust if needed
            className='hover:shadow-2xl focus:shadow-red-500 hover:scale-105 transition duration-300'
          >
            <div className='w-full h-80 flex items-center justify-center'>
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className='max-w-full max-h-full object-contain' // Ensure the image fits within the container without cropping
              />
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <i>{truncateDescription(book.bookDescription, 20)}</i> {/* Limit to 20 words */}
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;

