// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const MyFooter = () => {
  return (
    <>
      <footer className="text-gray-400 bg-gray-900 body-font rounded-t-lg">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </svg>
              <span className="ml-3 text-xl">NovelNest</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Trade your tales, sell your stories. Books bought and sold at their best value.</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">COMPANY</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white"><Link to="/shop">Shop</Link></a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white"><Link to="/blog">Blog</Link></a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white"><Link to="/admin/dashboard">Sell Your Book</Link></a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white"><Link to="/about">About</Link></a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">WORK WITH US</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">Authors</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Advertise</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Authors & ads blog</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">API</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">Thriller</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Fiction</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Romance</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Mystery</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">The Best Books</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">Best Books 2023</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Best Fiction</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Best Historical Fiction</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Best Mystery & Thriller</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 NovelNest —
              <a href="https://github.com/Sumankanta" className="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">@Sumankanta Padhan</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start" target='_blank'>
              <a className="text-gray-400" href='https://www.facebook.com/sumankanta.padhan/'>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400" href="https://x.com/Suman98553847" target='_blank'>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400" href="https://www.instagram.com/s.u.m.a.n_24?igsh=emR1Mm1ybDF2Z2Zk" target='_blank'>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400" href="https://www.linkedin.com/in/sumankanta-padhan/" target='_blank'>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MyFooter