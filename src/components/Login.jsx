/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React, { useContext, useState } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { AuthContext } from '../contects/AuthProvider'

// const Login = () => {
//     const { login, loginwithGoogle } = useContext(AuthContext);
//     const [error, setError] = useState("");

//     const location = useLocation();
//     const navigate = useNavigate();

//     const from = location.state?.from?.pathname || "/";

//     const handleLogin = (event) => {
//         event.preventDefault();
//         const formElement = event.target;
//         const email = formElement.email.value;
//         const password = formElement.password.value;
//         login(email, password).then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             alert(`Login Successful!`)
//             navigate(from, { replace: true });
//             // ...
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             setError(errorMessage)
//           });

//     };

//     //Sign-up using google account
//     const handleRegister = () => {
//         loginwithGoogle().then((result) =>{
//             const user = result.user;
//             alert(`Sign Up Successfully`);
//             navigate(from, { replace: true });
//         })
//         .catch((error) => {
//             const errorMessage = error.message;
//             setError(errorMessage);
//         });
//     }
//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//             <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//                 <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//                     <div className="max-w-md mx-auto">
//                         <div>
//                             <h1 className="text-2xl font-semibold">Login Form</h1>
//                         </div>
//                         <div className="divide-y divide-gray-200">
//                             <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                                 <div className="relative">
//                                     <input id="email" name="email" type="text" className="peer mt-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none  placeholder-transparent" placeholder="Email address" />
//                                     <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-3 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
//                                 </div>
//                                 <div className="relative">
//                                     <input id="password" name="password" type="password" className="peer mt-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none placeholder-transparent" placeholder="Password" />
//                                     <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-3 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
//                                 </div>
//                                 {error ? <p className='text-red-600 text-base'>Email or Password is not correct:</p> : ""}
//                                 <p>If you have an account, please <Link to="/signup" className='text-blue-600 underline'>Sign Up</Link> here.</p>
//                                 <div className="relative">
//                                     <button type="submit" className="bg-blue-500 text-white rounded-md px-6 py-2">Login</button>
//                                 </div>
//                             </form>
//                             {error && <p className="text-red-500">{error}</p>}
//                         </div>

//                         <hr />
//                         <div className=" mt-2 grid space-y-4">
//                             <button onClick={handleRegister} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
//  hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
//                                 <div className="relative flex items-center space-x-4 justify-center">
//                                     <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
//                                     <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
//                                 </div>
//                             </button>
//                             {/* <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
//  hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
//                                 <div className="relative flex items-center space-x-4 justify-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
//                                         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
//                                     </svg>
//                                     <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
//                                 </div>
//                             </button> 
//                             <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
//                                      hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
//                                 <div className="relative flex items-center space-x-4 justify-center">
//                                     <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
//                                     <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
//                                 </div>
//                             </button>*/}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default Login

import React, { useContext, useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'
import { toast } from 'react-toastify';

const Login = () => {
    const { login, loginwithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const formElement = event.target;
        const email = formElement.email.value;
        const password = formElement.password.value;
        login(email, password).then((userCredential) => {
            const user = userCredential.user;
            toast.success(`Login Successful!`)
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });
    };

    const handleRegister = () => {
        loginwithGoogle().then((result) => {
            const user = result.user;
            toast.success(`Login Successful!`);
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    };

    return (
        <div className="h-screen flex overflow-hidden relative">
            <div className={`flex flex-col md:w-1/2 justify-center items-center bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 bg-white transition-transform duration-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 transition-all duration-300 ease-in-out hover:border-indigo-500 focus-within:border-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="text" name="email" id="email" placeholder="Email Address" />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 transition-all duration-300 ease-in-out hover:border-indigo-500 focus-within:border-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <p>If you don't have an account, please <Link to="/signup" className="text-blue-600 underline">Sign Up</Link> here.</p>
                    <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 transition-all duration-300 ease-in-out transform hover:scale-105">Login</button>
                    <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out">Forgot Password?</span>
                    <div className="mt-4 grid space-y-4">
                        <button onClick={handleRegister} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300   hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            <div className={`relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden transition-transform duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">NovelNest</h1>
                    <p className="text-white mt-1">Buy and Sell Your Books for the Best Prices</p>
                    <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2 transition-all duration-300 ease-in-out transform hover:scale-105">
                        <a href="http://localhost:5173/">Read More</a>
                    </button>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
        </div>
    );
};

export default Login;
