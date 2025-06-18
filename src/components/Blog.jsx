/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

const Blog = () => {
  return (
    <div className=" mt-16 flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold leading-9 text-center text-gray-800 dark:text-gray-50">
            This Week <span className='text-blue-700'> Blogs</span>
          </h1>
          <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-6 lg:w-1/2 md:w-10/12 w-11/12">
            If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough
          </p>
        </div>
        <div className="lg:flex items-stretch md:mt-12 mt-8 ">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div className="sm:w-1/2 relative hover:scale-105 transition duration-500 cursor-pointer object-cover">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">13 May 2024</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white">A Reading Roadtrip Across the U.S.A.</h2>
                    <p className="text-base leading-4 text-white mt-2">Posted by Cybil</p>
                    <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
                <img src="https://plus.unsplash.com/premium_vector-1715261711898-d2e59c0295c3?bg=FFFFFF&q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" alt="chair" />
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-4 relative hover:scale-105 transition duration-500 cursor-pointer object-cover">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white">What Makes Us Happy?</h2>
                    <p className="text-base leading-4 text-white mt-2">By Joshua Wolf Shenk</p>
                    <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
                <img src="https://plus.unsplash.com/premium_vector-1714618846997-26d67cb12bce?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHw1MDAqNjQwJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D" className="w-full" alt="wall design" />
              </div>
            </div>
            <div className="relative hover:scale-105 transition duration-500 cursor-pointer object-cover">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold text-white">I Saw the Face of God in a Semiconductor Factory</h2>
                  <p className="text-base leading-4 text-white mt-2">by Virginia Heffernan</p>
                  <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHw2MjQqNTQwJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
              <img className="w-full mt-4 sm:hidden" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fDYyNCo1NDAlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="sitting place" />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative hover:scale-105 transition duration-500 cursor-pointer object-cover">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold text-white">Death of an Innocent</h2>
                  <p className="text-base leading-4 text-white mt-2">by John Krakauer</p>
                  <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDYyNCo1NDAlMjBib29rfGVufDB8fDB8fHww" alt="sitting place" className="w-full sm:block hidden" />
              <img className="w-full sm:hidden" src="https://images.unsplash.com/photo-1529590003495-b2646e2718bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDYyNCo1NDAlMjBib29rfGVufDB8fDB8fHww" alt="sitting place" />
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full hover:scale-105 transition duration-500 cursor-pointer object-cover">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                    <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
                <img src="https://plus.unsplash.com/premium_vector-1689096690822-615a1b1ddeb1?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHw1MDAqNjQwJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D" className="w-full" alt="chair" />
              </div>
              <div className="relative w-full sm:mt-0 mt-4 hover:scale-105 transition duration-500 cursor-pointer object-cover">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                    <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
                <img src="https://plus.unsplash.com/premium_vector-1682300528601-f4b544bfdb00?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fDUwMCo2NDAlMjBib29rfGVufDB8fDB8fHww" className="w-full" alt="wall design" />
              </div>
            </div>
          </div>
        </div>
        {/**Subscription for email */}

        <div className=' mt-24 mb-24 py-12 bg-teal-100 px-4 lg:px-24 shadow-2xl'>
          <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12'>
            <div className='md:w-1/2'>
              <h2 className='text-4xl font-bold mb-6 leading-snug'>Subscribe to newsletter</h2>
              <h2 className='text-xl font-semibold mb-6 leading-snug'>We sent latest news and posts once in every week, fresh from the oven</h2>
              <form className="mt-4 mb-10">
                <input
                  type="email"
                  className=" shadow-2xl bg-gray-100 px-4 py-2 border focus:border-green-400"
                  placeholder="22mca45@suiit.ac.in"
                />
                <button className="px-4 py-2 rounded bg-blue-800 text-gray-100 hover:bg-black">
                  <i className='bx bx-right-arrow-alt'>Subscribe</i>
                </button>
                <p className="text-green-900 opacity-50 ml-4 italic text-sm mt-1">No spam. We promise</p>
              </form>
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1679768606018-7ac0b7583957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8fDA%3D"
                className="w-96 md:w-1/2 object-cover rounded-lg shadow-2xl"
                alt="Subscribe"
              />
            </div>
          </div>
        </div>
        <div className="flex my-20 flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mb-16">
          {/* Main Post */}
          <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
            <img
              src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="rounded-md object-cover w-full h-64"
              alt="Main Post"
            />
            <span className="text-blue-700 text-sm hidden md:block mt-4">Technology</span>
            <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">The Future of Retail</h1>
            <h4 className="text-gray-800 text-xl font-semibold mt-2 mb-2 leading-tight">How Bookstores Can Adapt and Thrive</h4>
            <p className="text-gray-600 mt-6 mb-4">In the face of a growing e-commerce landscape, bookstores can navigate the future of retail by strategically integrating digital tools like online marketplaces and click-and-collect services. However, true success will hinge on cultivating a unique physical experience. By curating compelling collections, hosting engaging author events, and fostering a strong sense of community, bookstores can solidify their value proposition as cultural hubs and trusted resources for readers.</p>
            <a href="#" className="inline-block px-6 py-3 mt-2 rounded-lg bg-blue-700 text-gray-100 hover:bg-black">
              Read more
            </a>
          </div>

          {/* Sub-Main Posts */}
          <div className="w-full md:w-4/7">
            {/* Post 1 */}
            <div className="rounded w-full flex flex-col md:flex-row mb-10">
              <img
                src="https://images.unsplash.com/photo-1595303526913-c7037797ebe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fDkwMCo2MzclMjBHYWRnZXRzfGVufDB8fDB8fHww"
                className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                alt="Post 1"
              />
              <div className="bg-white rounded px-4">
                <span className="text-blue-700 text-sm hidden md:block">Gadgets</span>
                <div className="md:mt-0 text-gray-800 font-semibold text-lg mb-2">
                  Unveiling Innovation: A Look at This Week's Most Disruptive Gadgets
                </div>
                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                  The tech world keeps churning out exciting new gadgets. This week's highlights include the PulseBand Pro, a fitness tracker with personalized coaching, the solar-powered SolarPhone for the eco-conscious, and the Smart Assistant Pro, an AI assistant designed to boost productivity.
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="rounded w-full flex flex-col md:flex-row mb-10">
              <img
                src="https://plus.unsplash.com/premium_vector-1689096912872-b07982b4f2ac?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDkwMCo2MzclMjBiaXRjb2lufGVufDB8fDB8fHww"
                className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                alt="Post 2"
              />
              <div className="bg-white rounded px-4">
                <span className="text-blue-700 text-sm hidden md:block">Bitcoin</span>
                <div className="md:mt-0 text-gray-800 font-semibold text-lg mb-2">
                  Gold 2.0 or Digital Rollercoaster?
                </div>
                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                  Bitcoin's limited supply and decentralized nature have led some to compare it to gold as a store of value. However, unlike gold, Bitcoin is purely digital and can be easily transferred electronically.
                </p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="rounded w-full flex flex-col md:flex-row mb-10">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OTAwKjYzNyUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                alt="Post 3"
              />
              <div className="bg-white rounded px-4">
                <span className="text-blue-700 text-sm hidden md:block">Education</span>
                <div className="md:mt-0 text-gray-800 font-semibold text-lg mb-2">
                  The Power of Storytelling: Why Reading is Essential for Children's Development
                </div>
                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                  Crack open a book, and a world unfolds. For children, stories are more than just entertainment; they are stepping stones to a lifetime of learning and growth.  The power of storytelling, woven into the act of reading, plays a vital role in a child's development across various aspects.
                </p>
              </div>
            </div>

            {/* Post 4 */}
            <div className="rounded w-full flex flex-col md:flex-row mb-10">
              <img
                src="https://images.unsplash.com/photo-1521466201915-857158c18b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDkwMCo2MzclMjBBdXRob3J8ZW58MHx8MHx8fDA%3D"
                className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                alt="Post 4"
              />
              <div className="bg-white rounded px-4">
                <span className="text-blue-700 text-sm hidden md:block">Author</span>
                <div className="md:mt-0 text-gray-800 font-semibold text-lg mb-2">
                  Self-Publishing vs. Traditional Publishing: Unveiling the Options for Aspiring Authors.
                </div>
                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                  Congratulations! You've poured your heart and soul into a manuscript, and now you're ready to share your story with the world. But a crucial question arises: Self-publishing or traditional publishing?
                </p>
              </div>
            </div>
          </div>
        </div>


        {/**Latest News*/}
        <div className="flex mt-24 mb-8 px-4 lg:px-0 items-center justify-between">
          <h1 className="font-bold text-4xl leading-tight">Latest <span className=' text-blue-700 text-4xl capitalize'>news</span></h1>
          <a className="bg-blue-400 px-3 py-1 rounded cursor-pointer hover:text-white hover:bg-black">
            View all
          </a>
        </div>
        <div className="block space-x-0 lg:flex lg:space-x-6">

          <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D" className="rounded" alt="technology" />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-2xl text-gray-800">The Art of Book Collecting: Tips for Beginners</h2>
              <p className="text-gray-700 mt-2">
                Collecting books can be a rewarding hobby, offering both intellectual and aesthetic pleasure. For beginners, start by choosing a niche—whether it's first editions, specific authors, or a genre you love. Learn about book conditions and how to identify valuable copies.
              </p>

              <a href="#" className="inline-block py-2 rounded text-black hover:text-blue-700 hover:underline mt-2 ml-auto"> Read more </a>
            </div>
          </div>

          <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img src="https://images.unsplash.com/photo-1506962240359-bd03fbba0e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2slMjBtdXN0JTIwcmVhZHxlbnwwfHwwfHx8MA%3D%3D" className="rounded" alt="technology" />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-2xl text-gray-800">Top 10 Must-Read Books for Summer 2024</h2>
              <p className="text-gray-700 mt-2">Summer is here, and with it comes the perfect opportunity to curl up with a captivating book. Whether you crave laughter, thrills, or a thought-provoking journey, there's a summer read waiting for you. Here's our list of the top 10 picks to make your summer sizzling</p>

              <a href="#" className="inline-block py-2 text-black hover:text-blue-700 hover:underline mt-2 ml-auto"> Read more </a>
            </div>
          </div>

          <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img src="https://images.unsplash.com/photo-1542641806058-922fa0dae86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QXVkaW9ib29rc3xlbnwwfHwwfHx8MA%3D%3D" className="rounded" alt="technology" />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-2xl text-gray-800">Exploring the Benefits of Audiobooks</h2>
              <p className="text-gray-700 mt-2">
                Audiobooks are becoming increasingly popular and for good reason. They allow you to enjoy books while multitasking—whether you're commuting, exercising, or doing household chores. Audiobooks can also enhance the storytelling experience, especially when narrated by talented voice actors.
              </p>

              <a href="#" className="inline-block py-2 text-black hover:text-blue-700 hover:underline mt-2 ml-auto"> Read more </a>
            </div>
          </div>
        </div>
        {/**Subscription for email */}

        <div className=' mt-24 mb-24 py-12 bg-teal-100 px-4 lg:px-24 shadow-2xl'>
          <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12'>
            <div className='md:w-1/2'>
              <h2 className='text-4xl font-bold mb-6 leading-snug'>Subscribe for Challenges</h2>
              <h2 className='text-xl font-semibold mb-6 leading-snug'>We sent latest news and challenges once in every day, fresh from the oven</h2>
              <form className="mt-4 mb-10">
                <input
                  type="email"
                  className=" shadow-2xl bg-gray-100 px-4 py-2 border focus:border-green-400"
                  placeholder="22mca45@suiit.ac.in"
                />
                <button className="px-4 py-2 rounded bg-blue-800 text-gray-100 hover:bg-black">
                  <i className='bx bx-right-arrow-alt'>Subscribe</i>
                </button>
                <p className="text-green-900 opacity-50 ml-4 italic text-sm mt-1">No spam. We promise</p>
              </form>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1500114434493-7cf32027f4fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fENoYWxsZW5nZXN8ZW58MHx8MHx8fDA%3D"
                className="w-96 md:w-1/2 object-cover rounded-lg shadow-2xl"
                alt="Subscribe"
              />
            </div>
          </div>
        </div>

        {/** Week’s Reading Challenges */}
        <div role="main" className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-5xl font-bold leading-9 text-center text-gray-800 dark:text-gray-50">
            This Week’s Reading <span className='text-blue-700'> Challenges</span>
          </h1>
          <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-6 lg:w-1/2 md:w-10/12 w-11/12">
            Unlock the Magic of Reading: Delve into Diverse Worlds, Engage Your Imagination, and Challenge Yourself with This Week's Enthralling Literary Quests!
          </p>
        </div>
        <section className="dark:bg-gray-100 mt-16 dark:text-gray-800">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
              <img src="https://plus.unsplash.com/premium_photo-1698084059435-a50ddfd69303?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fDQ4MHgzNjAlMjBib29rc3RvcmV8ZW58MHx8MHx8fDA%3D" alt="" className="object-cover ml-4 w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline">The Impact of Independent Bookstores on Communities</h3>
                <span className="text-xs dark:text-gray-600">June 03, 2024</span>
                <p>Independent bookstores play a crucial role in their communities. They provide a space for book lovers to meet, host events, and discover new authors. These stores often curate a unique selection of books, reflecting the tastes and interests of their local community.</p>
              </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full ml-4 rounded h-44 dark:bg-gray-500" src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">A Journey Through Classic Literature: Books Everyone Should Read</h3>
                  <span className="text-xs dark:text-gray-600">May 6, 2024</span>
                  <p>Embarking on a journey through classic literature is like stepping into a time machine that transports you to different eras, cultures, and worlds crafted by some of the greatest minds in literary history.</p>
                </div>
              </a>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full ml-3 rounded h-44 dark:bg-gray-500" src="https://images.unsplash.com/photo-1611673983948-18286e86703e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Non-Fiction Knowledge Challenge</h3>
                  <span className="text-xs dark:text-gray-600">Duration: 5 Months</span>
                  <p>Read one non-fiction book each month for five months,
                    Topics can include history, science, biography, self-help, and more,
                    Write a brief summary of what you learned and share it with us on social media using the hashtag #NonFictionKnowledgeChallenge.</p>
                </div>
              </a>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full ml-3 rounded h-44 dark:bg-gray-500" src="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Exploring the World Through Travel Literature</h3>
                  <span className="text-xs dark:text-gray-600">January 23, 2024</span>
                  <p>Travel literature allows readers to embark on extraordinary journeys from the comfort of their own homes. These books not only offer a sense of adventure but also provide deep insights into different cultures, histories, and landscapes.</p>
                </div>
              </a>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                <img role="presentation" className="object-cover w-full ml-4 rounded h-44 dark:bg-gray-500" src="https://images.unsplash.com/photo-1570280436789-9169883e3548?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Unforgettable Memoirs: Personal Stories That Resonate</h3>
                  <span className="text-xs dark:text-gray-600">April 24, 2024</span>
                  <p>Memoirs offer a unique glimpse into the lives and experiences of others, providing profound insights and emotional connections. Here are three powerful memoirs that will leave a lasting impact on readers.</p>
                </div>
              </a>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                <img role="presentation" className="object-cover w-full ml-3 rounded h-44 dark:bg-gray-500" src="https://plus.unsplash.com/premium_photo-1710522706863-71b117956d4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NDgweDM2MCUyMEJvb2slMjB0byUyME1vdmllfGVufDB8fDB8fHww" />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Book-to-Movie Adaptation Challenge</h3>
                  <span className="text-xs dark:text-gray-600">Duration: 3 Months</span>
                  <p>Read three books that have been adapted into movies,
                    Watch the corresponding movies after finishing each book,
                    Write a comparison of the book and movie, discussing the differences and which version you preferred,
                    Share your reviews with the hashtag #BookToMovieChallenge.</p>
                </div>
              </a>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                <img role="presentation" className="object-cover w-full ml-3 rounded h-44 dark:bg-gray-500" src="https://plus.unsplash.com/premium_photo-1677187301411-eaab5702a215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDQ4MHgzNjAlMjBNb2Rlcm4lMjBGaWN0aW9ufGVufDB8fDB8fHww" />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Must-Read Modern Fiction: Contemporary Novels That Define Our Era</h3>
                  <span className="text-xs dark:text-gray-600">January 26, 2021</span>
                  <p>Modern fiction continues to push the boundaries of storytelling, reflecting the complexities of contemporary life and the diversity of human experiences.</p>
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <button className="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center  justify-center bg-transparent text-purple-500 h-auto w-[170px] overflow-hidden transition-all duration-100">
                <span className="group-hover:w-full absolute left-0 h-full w-5 border-y border-l border-blue-400 transition-all duration-500">
                </span>
                <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200">Read More</p>
                <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute translate-x-full opacity-0  transition-all duration-200">Thank
                  you!
                </span>
                <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-blue-400 transition-all duration-500">
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Blog