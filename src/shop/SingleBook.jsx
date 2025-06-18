import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription, authorName } = useLoaderData();
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    const newItem = {
      id: _id,
      title: bookTitle,
      author: authorName,
      imageURL: imageURL,
      quantity: 1,
      price: 100, // Adjust price as needed
    };

    // Retrieve existing cart items from localStorage or initialize an empty array
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the book is already in cart
    const existingItem = existingCartItems.find(item => item.id === newItem.id);
    if (existingItem) {
      // Increase quantity if already in cart
      const updatedCartItems = existingCartItems.map(item =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      // Add new item to cart
      const updatedCartItems = [...existingCartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    setAddedToCart(true);
    toast.success(`Successfully Added`)
  };

  const handleViewCart = () => {
    navigate('/cart');
  };
  const handleBackToShop = () => {
    navigate('/shop');
  };

  return (
    <div className="mt-22 px-4 lg:px-24 bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100">
      <section className="text-black body-font">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24 md:flex-row">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
            <img className="object-cover object-center shadow-2xl rounded-xl h-72" alt="hero" src={imageURL} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl font-bold mb-8 text-gray-900">
              {bookTitle}
              <br />
              <span className="hidden mt-4 text-3xl sm:2xl lg:inline-block">{authorName}</span>
            </h1>
            <p className="mb-8 italic leading-relaxed">{bookDescription}</p>
            <div className="flex justify-center">
              <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${addedToCart ? 'cursor-not-allowed opacity-50' : ''}`}
              >
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                onClick={handleViewCart}
                className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                View Cart
              </button>
              <button
                onClick={handleBackToShop}
                className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Back to Shop
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBook;
