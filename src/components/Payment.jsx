// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Payment = () => {
//   return (
//     <motion.div 
//       className="bg-gray-100 min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-yellow-200"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="bg-white p-8 rounded-3xl shadow-lg text-center md:w-1/3 w-11/12 mx-auto ">
//         <motion.svg 
//           viewBox="0 0 24 24" 
//           className="text-green-600 w-16 h-16 mx-auto my-6"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <path 
//             fill="currentColor"
//             d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
//           />
//         </motion.svg>
//         <motion.div 
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//         >
//           <h3 className="md:text-2xl text-xl text-gray-900 font-semibold">Payment Done!</h3>
//           <p className="text-gray-600 my-4">Thank you for completing your secure online payment.</p>
//           <p className="text-gray-600 mb-8">Have a great day!</p>
//           <Link to="/" className="inline-block px-12 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition duration-300">
//             GO BACK
//           </Link>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Payment;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Payment = () => {
  useEffect(() => {
    // Clear the cart once payment is completed
    localStorage.removeItem('cartItems');
  }, []);

  return (
    <motion.div 
      className="bg-gray-100 min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-yellow-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white p-8 rounded-3xl shadow-lg text-center md:w-1/3 w-11/12 mx-auto ">
        <motion.svg 
          viewBox="0 0 24 24" 
          className="text-green-600 w-16 h-16 mx-auto my-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <path 
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          />
        </motion.svg>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="md:text-2xl text-xl text-gray-900 font-semibold">Payment Done!</h3>
          <p className="text-gray-600 my-4">Thank you for completing your secure online payment.</p>
          <p className="text-gray-600 mb-8">Have a great day!</p>
          <Link to="/" className="inline-block px-12 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition duration-300">
            GO BACK
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Payment;

