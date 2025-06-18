import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QuotesRefresher = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [category, setCategory] = useState('Science');
  const categories = [
    'Love', 'Life', 'Inspirational', 'Humor', 'Philosophy', 'God', 'Truth',
    'Wisdom', 'Romance', 'Poetry', 'Death', 'Happiness', 'Life Lessons', 'Hope',
    'Faith', 'Inspiration', 'Spirituality', 'Motivational', 'Religion', 'Writing',
    'Relationships', 'Success', 'Time', 'Motivation', 'Science', 'Knowledge'
  ];

  const fetchQuote = async () => {
    try {
      const response = await fetch(`https://api.quotable.io/random?tags=${category.toLowerCase()}`);
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setAuthorImage(data.authorImage); // Assuming the API provides author's image URL
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchQuote();
    }, 12000); // 1 minutes in milliseconds

    return () => {
      clearTimeout(timerId);
    };
  }, [quote, author, category]);

  const handleRefresh = () => {
    fetchQuote();
  };

  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-32'>
        {/** left side */}
        <div className='md:w-1/2 space-y-8 '>
          <h2 className='text-4xl font-bold leading-snug'>Quote of the Moment
          </h2>
          <span className='text-blue-700 text-4xl font-bold capitalize'>refreshing sip for the soul</span>
          <p className='md:w-4/5 italic text-lg'>"{quote}"</p>
          <div className="flex items-center">
            {authorImage && <img src={authorImage} alt={author} className="h-10 w-10 rounded-full mr-2" />}
            <p className=" text-xl font-bold antialiased text-right mb-4">- {author}</p>
          </div>
          <label htmlFor="category" className="block text-xl mb-2">Select Category:</label>
          <div className="flex justify-center">
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className=" flex  bg-white border border-gray-300 rounded px-4 py-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            onClick={handleRefresh}
            className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
            Refresh Quote
          </button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default QuotesRefresher;


{/* <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <h2 className="text-2xl font-bold mb-4">Quote of the Moment</h2>
        <p className="text-gray-700 text-lg mb-4">"{quote}"</p>
        <div className="flex items-center">
          {authorImage && <img src={authorImage} alt={author} className="h-10 w-10 rounded-full mr-2" />}
          <p className="text-gray-500 text-right mb-4">- {author}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 mb-2">Select Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full bg-white border border-gray-300 rounded px-4 py-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleRefresh}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Refresh Quote
        </button>
      </div>
    </div> */}