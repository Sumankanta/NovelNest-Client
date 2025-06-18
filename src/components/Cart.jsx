// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(storedCartItems);
//   }, []);

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const calculateShipping = () => {
//     if (cartItems.length > 0) {
//       return 18.99 + 20; // Adjust shipping calculation as needed
//     }
//     return 0; // No shipping charge when cart is empty
//   };

//   const handleRemoveItem = (itemId) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//     toast.error(`Item Removed from Cart`);
//   };

//   const handleQuantityChange = (itemId, newQuantity) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === itemId) {
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//   };

//   const handleClearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem('cartItems');
//     toast.error(`Cart Cleared`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto pt-20 pb-12 px-6 md:px-12 lg:px-20">
//         <h1 className="mb-10 text-center text-5xl font-bold">Cart<span className='text-blue-700'> Items</span></h1>
//         <ol className="items-center mb-6 flex w-full max-w-2xl text-center text-sm font-medium  dark:text-black sm:text-base ">
//             <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
//               <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after: sm:after:hidden hover:text-blue-700 text-green-500">
//                 <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                 </svg>
//                 Cart
//               </span>
//             </li>
//             <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
//               <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after: sm:after:hidden hover:text-blue-700">
//                 <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                 </svg>
//                 Checkout
//               </span>
//             </li>

//             <li className="flex shrink-0 items-center hover:text-blue-700">
//               <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//               </svg>
//               Order summary
//             </li>
//           </ol>
//         {cartItems.length === 0 ? (
//           <div className="flex justify-center items-center h-screen">
//             <p className="text-2xl text-gray-700">Your cart is empty.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-6">
//               {cartItems.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -50 }}
//                   transition={{ duration: 0.3 }}
//                   className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
//                 >
//                   <img src={item.imageURL} alt="product" className="w-24 h-24 object-cover rounded-lg" />
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
//                         <p className="text-xs text-gray-700">by {item.author}</p>
//                       </div>
//                       <button
//                         onClick={() => handleRemoveItem(item.id)}
//                         className="text-xs text-red-500 font-semibold hover:underline"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                     <div className="flex items-center space-x-4 mt-2">
//                       <div className="flex items-center space-x-2">
//                         <button
//                           onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                           className="rounded-full bg-gray-200 px-3 py-1.5 hover:bg-blue-500 hover:text-white"
//                         >
//                           -
//                         </button>
//                         <input
//                           type="number"
//                           className="w-16 border border-gray-300 text-center text-xs py-1"
//                           value={item.quantity}
//                           min="1"
//                           onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
//                         />
//                         <button
//                           onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                           className="rounded-full bg-gray-200 px-3 py-1.5 hover:bg-blue-500 hover:text-white"
//                         >
//                           +
//                         </button>
//                       </div>
//                       <p className="text-sm">₹{(item.price * item.quantity).toFixed(2)}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="mb-4">
//                 <p className="text-gray-700">Subtotal</p>
//                 <p className="font-semibold text-lg">₹{calculateTotalPrice().toFixed(2)}</p>
//               </div>
//               <div className="mb-4">
//                 <p className="text-gray-700">Shipping</p>
//                 <p className="font-semibold text-lg">₹{calculateShipping().toFixed(2)}</p>
//               </div>
//               <hr className="my-4" />
//               <div className="flex justify-between items-center">
//                 <p className="text-lg font-bold">Total</p>
//                 <div>
//                   <p className="text-lg font-bold">₹{(calculateTotalPrice() + calculateShipping()).toFixed(2)}</p>
//                   <p className="text-sm text-gray-700">including GST</p>
//                 </div>
//               </div>
//               <div className="mt-6 space-y-4">
//                 <button
//                   onClick={handleClearCart}
//                   className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600"
//                 >
//                   Clear Cart
//                 </button>
//                  <Link to="/checkout" ><button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 mt-4">
//                 Checkout</button></Link>
                
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    return cartItems.length > 0 ? 18.99 + 20 : 0;
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    toast.error(`Item Removed from Cart`);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
    toast.error(`Cart Cleared`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto pt-20 pb-12 px-6 md:px-12 lg:px-20">
        <h1 className="mb-10 text-center text-5xl font-bold">Cart<span className='text-blue-700'> Items</span></h1>

        <ol className="items-center mb-6 flex w-full max-w-2xl text-center text-sm font-medium  dark:text-black sm:text-base ">
             <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
               <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after: sm:after:hidden hover:text-blue-700 text-green-500">
                 <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                 Cart
               </span>
             </li>
             <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
               <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after: sm:after:hidden hover:text-blue-700">
                 <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                 Checkout
               </span>
             </li>

             <li className="flex shrink-0 items-center hover:text-blue-700">
               <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
               Order summary
             </li>
           </ol>

        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-2xl text-gray-700">Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
                >
                  <img src={item.imageURL} alt="product" className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                        <p className="text-xs text-gray-700">by {item.author}</p>
                      </div>
                      <button onClick={() => handleRemoveItem(item.id)} className="text-xs text-red-500 font-semibold hover:underline">
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="rounded-full bg-gray-200 px-3 py-1.5 hover:bg-blue-500 hover:text-white"
                        >-</button>
                        <input
                          type="number"
                          className="w-16 border border-gray-300 text-center text-xs py-1"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        />
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="rounded-full bg-gray-200 px-3 py-1.5 hover:bg-blue-500 hover:text-white"
                        >+</button>
                      </div>
                      <p className="text-sm">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <p className="text-gray-700">Subtotal</p>
                <p className="font-semibold text-lg">₹{calculateTotalPrice().toFixed(2)}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">Shipping</p>
                <p className="font-semibold text-lg">₹{calculateShipping().toFixed(2)}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Total</p>
                <div>
                  <p className="text-lg font-bold">₹{(calculateTotalPrice() + calculateShipping()).toFixed(2)}</p>
                  <p className="text-sm text-gray-700">including GST</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <button
                  onClick={handleClearCart}
                  className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600"
                >
                  Clear Cart
                </button>
                <Link to="/checkout">
                  <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 mt-4">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
