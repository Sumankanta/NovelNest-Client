// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';

// const Checkout = () => {
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

//   const handleBtn = () => {
//     toast.success(`Payment Successful`)
//   };

//   return (
//     <motion.div
//       className="bg-white mt-12 min-h-screen"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
//         <motion.h1
//           className="mb-10 text-center text-5xl font-bold"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Check<span className='text-blue-700'>out</span>
//         </motion.h1>
//         <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
//           <motion.ol
//             className="items-center flex w-full max-w-2xl text-center text-sm font-medium dark:text-black sm:text-base"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
//               <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after: sm:after:hidden hover:text-blue-700">
//                 <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                 </svg>
//                 Cart
//               </span>
//             </li>
//             <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
//               <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after: sm:after:hidden hover:text-blue-700 text-green-500">
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
//           </motion.ol>

//           <motion.div
//             className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             <div className="min-w-0 flex-1 space-y-8">
//               <div className="space-y-4">
//                 <motion.h2
//                   className="text-xl font-semibold text-gray-900 dark:text-white"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.7, duration: 1 }}
//                 >
//                   Delivery Details
//                 </motion.h2>

//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <motion.div
//                     initial={{ y: 50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.7, duration: 1 }}
//                   >
//                     <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
//                     <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-black dark:focus:border-primary-500 dark:focus:ring-primary-500 required:true" placeholder="Your Name" required />
//                   </motion.div>

//                   <motion.div
//                     initial={{ y: 50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.8, duration: 1 }}
//                   >
//                     <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
//                     <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-black dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@gmail.com" required />
//                   </motion.div>

//                   <motion.div
//                     initial={{ y: 50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.9, duration: 1 }}
//                   >
//                     <label htmlFor="phone-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
//                       Phone Number*
//                     </label>
//                     <div className="flex items-center">
//                       <div
//                         id="dropdown-phone"
//                         className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
//                       </div>
//                       <div className="relative w-full">
//                         <input
//                           type="text"
//                           id="phone-input"
//                           className="z-20 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-black dark:focus:border-primary-500"
//                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                           placeholder="123-456-7890"
//                           required
//                         />
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <motion.h3
//                   className="text-xl font-semibold text-gray-900 dark:text-white"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1, duration: 1 }}
//                 >
//                   Payment
//                 </motion.h3>

//                 <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//                   <motion.div
//                     className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
//                     initial={{ y: 50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 1.1, duration: 1 }}
//                   >
//                     <div className="flex items-start">
//                       <div className="flex h-5 items-center">
//                         <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
//                       </div>

//                       <div className="ms-4 text-sm">
//                         <label htmlFor="credit-card" className="font-medium leading-none text-gray-900 dark:text-white"> Credit Card </label>
//                         <p id="credit-card-text" className="mt-1 text-xs font-normal dark:text-black">Pay with your credit card</p>
//                       </div>
//                     </div>
//                     <div>
//                       <label htmlFor="your_name" className="mb-2 mt-4 block text-sm font-medium text-gray-900 dark:text-white"> Your Card Number </label>
//                       <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-black dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="xxxx-xxxx-xxxx-xxxxx" required />
//                     </div>
//                     <div className="flex-row flex mt-2">
//                       <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="MM/YY" />
//                       <input className="border rounded-br ml-2 border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="CVC" />
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
//                     initial={{ y: 50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 1.2, duration: 1 }}
//                   >
//                     <div className="flex items-start">
//                       <div className="flex h-5 items-center">
//                         <input id="paypal-2" aria-describedby="paypal-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
//                       </div>
//                       <div className="ms-4 text-sm">
//                         <label htmlFor="paypal-2" className="font-medium leading-none text-gray-900 dark:text-white"> Paypal account </label>
//                         <p id="paypal-text" className="mt-1 text-xs font-normal dark:text-black">Connect to your account</p>
//                       </div>
//                     </div>
//                     <div>
//                       <label htmlFor="your_name" className="mb-2 mt-4 block text-sm font-medium text-gray-900 dark:text-white"> Your account Name </label>
//                       <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-black dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Email or Mobile Number" required />
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//             <motion.div
//               className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 1.3, duration: 1 }}
//             >
//               <div className="flow-root">
//                 <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
//                   <dl className="flex items-center justify-between gap-4 py-3">
//                     <dt className="text-base font-normal dark:text-black">Subtotal</dt>
//                     <dd className="text-base font-medium text-gray-900 dark:text-white">₹{calculateTotalPrice().toFixed(2)}</dd>
//                   </dl>
//                   <dl className="flex items-center justify-between gap-4 py-3">
//                     <dt className="text-base font-normal dark:text-black">Shipping</dt>
//                     <dd className="text-base font-medium text-gray-900 dark:text-white">₹{calculateShipping().toFixed(2)}</dd>
//                   </dl>

//                   <dl className="flex items-center justify-between gap-4 py-3">
//                     <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
//                     <dd className="text-base font-bold text-gray-900 dark:text-white">₹{(calculateTotalPrice() + calculateShipping()).toFixed(2)}</dd>
//                   </dl>
//                   <dl className="flex items-center justify-between gap-4 py-3">
//                     <dt className="text-base font-bold text-gray-900 dark:text-white">    </dt>
//                     <dd className="text-base text-gray-900 dark:text-white">including GST</dd>
//                   </dl>
//                 </div>
//               </div>
//               <motion.div
//                 className="mt-6 space-y-4"
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1.4, duration: 1 }}
//               >
//                 <p className="text-sm font-normal dark:text-black">One or more items in your cart require an account. <Link to="/Login" className='flex items-center gap-2 underline hover:no-underline'>Sign in or create an account now.</Link></p>
//                 <Link to="/payment" ><button onClick={handleBtn} className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 mt-4">
//                   Checkout</button></Link>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </form>
//       </section>
//     </motion.div>
//   )
// }

// export default Checkout;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    paypalAccount: ''
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    if (cartItems.length > 0) {
      return 18.99 + 20;
    }
    return 0;
  };

  const handleBtn = (e) => {
    e.preventDefault();

    const { name, email, phone, cardNumber, expiry, cvc } = formData;

    if (!name || !email || !phone || !cardNumber || !expiry || !cvc) {
      toast.error('Please fill all required fields');
      return;
    }

    toast.success('Payment Successful');
  };

  return (
    <motion.div
      className="bg-white mt-12 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <motion.h1
          className="mb-10 text-center text-5xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Check<span className='text-blue-700'>out</span>
        </motion.h1>
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">          
           <motion.ol
            className="items-center flex w-full max-w-2xl text-center text-sm font-medium dark:text-black sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after: sm:after:hidden hover:text-blue-700">
                <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Cart
              </span>
            </li>
            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after: sm:after:hidden hover:text-blue-700 text-green-500">
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
          </motion.ol>
          <motion.div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <motion.h2 className="text-xl font-semibold text-gray-900 dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  Delivery Details
                </motion.h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}>
                    <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
                    <input type="text" id="your_name" name="name" value={formData.name} onChange={handleInputChange}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="Your Name" required />
                  </motion.div>

                  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
                    <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
                    <input type="email" id="your_email" name="email" value={formData.email} onChange={handleInputChange}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="name@gmail.com" required />
                  </motion.div>

                  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, duration: 1 }}>
                    <label htmlFor="phone-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Phone Number*</label>
                    <div className="relative w-full">
                      <input type="text" id="phone-input" name="phone" value={formData.phone} onChange={handleInputChange}
                        className="z-20 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                        placeholder="123-456-7890" required />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="space-y-4">
                <motion.h3 className="text-xl font-semibold text-gray-900 dark:text-white"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                  Payment
                </motion.h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <motion.div className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                    initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 1 }}>
                    <input id="credit-card" type="radio" name="payment-method" className="hidden" checked readOnly />
                    <label htmlFor="your_name" className="mb-2 mt-4 block text-sm font-medium text-gray-900"> Your Card Number </label>
                    <input type="text" id="your_name" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="xxxx-xxxx-xxxx-xxxxx" required />
                    <div className="flex-row flex mt-2">
                      <input className="border rounded-bl border-gray-300 p-4 w-full text-base" type="text" name="expiry"
                        placeholder="MM/YY" value={formData.expiry} onChange={handleInputChange} />
                      <input className="border rounded-br ml-2 border-gray-300 p-4 w-full text-base" type="text" name="cvc"
                        placeholder="CVC" value={formData.cvc} onChange={handleInputChange} />
                    </div>
                  </motion.div>
                  {/* Paypal Option (Optional) */}
                </div>
              </div>
            </div>

            {/* Summary and Submit */}
            <motion.div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md"
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.3, duration: 1 }}>
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal">Subtotal</dt>
                    <dd className="text-base font-medium text-gray-900">₹{calculateTotalPrice().toFixed(2)}</dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal">Shipping</dt>
                    <dd className="text-base font-medium text-gray-900">₹{calculateShipping().toFixed(2)}</dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">₹{(calculateTotalPrice() + calculateShipping()).toFixed(2)}</dd>
                  </dl>
                </div>
              </div>
              <motion.div
                className="mt-6 space-y-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
              >
                <p className="text-sm font-normal dark:text-black">One or more items in your cart require an account. <Link to="/Login" className='flex items-center gap-2 underline hover:no-underline'>Sign in or create an account now.</Link></p>
                <Link to="/payment"><button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 mt-4"><Link onClick={handleBtn} to="/payment">Checkout</Link></button></Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </form>
      </section>
    </motion.div>
  );
};

export default Checkout;

