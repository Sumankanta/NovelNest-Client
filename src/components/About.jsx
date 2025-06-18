import React from 'react'

const About = () => {
  return (
    <div className="bg-white">
      <header className="bg-teal-100 text-center py-6 rounded-lg">
        <h1 className="text-5xl font-bold mt-16">About <span className='text-blue-700'> Us</span></h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-black max-w-2xl mx-auto">
          At NovelNest, our mission is to create a haven for book lovers where they can explore, discover, and indulge in the joy of reading. We strive to offer a diverse selection of books, from bestsellers to hidden gems, ensuring there's something for everyone. Our goal is to inspire a love for reading and make great books accessible to all.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold" >4500+</h3>
            <p className="text-black">Book Sales</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold" >2000+</h3>
            <p className="text-black">Happy Customer</p>
          </div>
        </div>
      </section>

      <section className="bg-teal-100  py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          We envision a world where everyone has access to books that inspire, educate, and entertain. We are committed to fostering a community of readers who share a passion for literature and lifelong learning. By providing a wide range of titles and an engaging platform, we aim to be a cornerstone in the literary community, promoting the joy and benefits of reading.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Our Bookstore Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Wide Range of Genres</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Exclusive Editions</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Community Engagement</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Personalized Recommendations</h3>
          </div>
        </div>
      </section>

      <section className="bg-teal-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">State-Of-The-Art Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Seamless E-Commerce Platform</h3>
            <p className="text-black mt-2">Smooth, secure shopping with multiple payment options.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Mobile-Friendly Design</h3>
            <p className="text-black mt-2">Responsive site for seamless browsing on all devices.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Interactive User Interface</h3>
            <p className="text-black mt-2">Engaging and intuitive UI for easy navigation.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Real-Time Inventory Updates</h3>
            <p className="text-black mt-2">Stay informed with instant book availability updates.</p>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4 w-full">
        <h2 className="text-2xl font-bold">Get Answer To Your Most Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-full shadow-md transition transform hover:bg-teal-200 hover:scale-100 scale-90 duration-300">
            <h3 className="text-xl font-bold">How can I create an account on NovelNest?</h3>
            <p className="mt-2 text-black">Click "Sign Up," fill details, follow prompts. Ready to explore and shop.</p>
          </div>
          <div className="p-4 border rounded-full shadow-md transition transform hover:scale-100 hover:bg-teal-200 scale-90 mt-4 duration-300">
            <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
            <p className="mt-2 text-black">We accept credit/debit cards, PayPal, and other secure online methods.</p>
          </div>
          <div className="p-4 border rounded-full shadow-md transition transform hover:scale-100 hover:bg-teal-200 scale-90 mt-4 duration-300">
            <h3 className="text-xl font-bold">Do you offer physical books?</h3>
            <p className="mt-2 text-black">Currently digital books only. Physical books may come in future.</p>
          </div>
          <div className="p-4 border rounded-full shadow-md transition transform hover:scale-100 hover:bg-teal-200 scale-90 mt-4 duration-300">
            <h3 className="text-xl font-bold">Is NovelNest mobile-friendly?</h3>
            <p className="mt-2 text-black">Yes, website responsive across smartphones, tablets, and desktops.</p>
          </div>
          <div className="p-4 border rounded-full shadow-md transition transform hover:scale-100 hover:bg-teal-200 scale-90 mt-4 duration-300">
            <h3 className="text-xl font-bold">How can I find a specific book?</h3>
            <p className="mt-2 text-black">Use our search engine for titles, authors, genres, or keywords. Browse categories.</p>
          </div>
          <div className="p-4 border rounded-full shadow-md transition transform hover:scale-100 hover:bg-teal-200 scale-90 mt-4 duration-300">
            <h3 className="text-xl font-bold">How do I contact customer support?</h3>
            <p className="mt-2 text-black">Visit "Contact Us" page or email support@novelnest.com for assistance.</p>
          </div>
        </div>
      </section>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
          <div className=" bg-teal-100 md:col-span-4 p-10 text-black">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-800">
              Your Ultimate Destination for Discovering, Sharing, and Celebrating the World of Stories!
            </p>
            <div className="flex items-center mt-16">
              <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.536 489.536"
                xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 489.536 489.536">
                <g>
                  <g>
                    <path
                      d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z">
                    </path>
                    <rect width="136.5" x="177.054" y="379.1" height="20.8"></rect>
                    <path
                      d="m289.554,108.2c0-26-21.9-47.9-47.9-47.9s-47.9,21.9-47.9,47.9 20.8,47.9 47.9,47.9c27.1,0 47.9-21.8 47.9-47.9zm-75-1c0-14.6 11.5-27.1 27.1-27.1s27.1,12.5 27.1,27.1-11.5,27.1-27.1,27.1c-14.6,2.84217e-14-27.1-12.5-27.1-27.1z">
                    </path>
                  </g>
                </g>
              </svg>
              <span className="text-sm">Jyoti Vihar, Burla, Sambalpur, Odisha- 768019</span>
            </div>
            <div className="flex items-center mt-5">
              <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 60.002 60.002"
                style={{ enableBackground: 'new 0 0 60.002 60.002;' }} xmlSpace="preserve">
                <g>
                  <path
                    d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693 c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z">
                  </path>
                  <path
                    d="M58.256,35.65c0.553,0,1-0.447,1-1s-0.447-1-1-1c-0.886,0-1.605-0.72-1.605-1.605c0-0.553-0.447-1-1-1s-1,0.447-1,1 C54.65,34.033,56.267,35.65,58.256,35.65z">
                  </path>
                  <path
                    d="M20.002,2.992c3.691,0,6.693,3.003,6.693,6.693c0,0.553,0.448,1,1,1s1-0.447,1-1c0-4.794-3.9-8.693-8.693-8.693 c-0.552,0-1,0.447-1,1S19.449,2.992,20.002,2.992z">
                  </path>
                  <path
                    d="M19.748,6.334c0,0.553,0.448,1,1,1c0.885,0,1.604,0.72,1.604,1.605c0,0.553,0.448,1,1,1s1-0.447,1-1 c0-1.988-1.617-3.605-3.604-3.605C20.196,5.334,19.748,5.781,19.748,6.334z">
                  </path>
                  <path
                    d="M44.076,37.889c-1.276-0.728-2.597-0.958-3.721-0.646c-0.844,0.234-1.532,0.768-1.996,1.546 c-1.02,1.22-2.286,2.646-2.592,2.867c-2.367,1.604-4.25,1.415-6.294-0.629L17.987,29.542c-2.045-2.045-2.233-3.928-0.631-6.291 c0.224-0.31,1.65-1.575,2.87-2.596c0.778-0.464,1.312-1.152,1.546-1.996c0.311-1.123,0.082-2.444-0.652-3.731 c-0.173-0.296-4.291-7.27-8.085-9.277c-1.926-1.019-4.255-0.669-5.796,0.865l-3.02,3.02c-3.314,3.314-3.925,8.323-1.567,13.471 c2.176,4.634,6.164,9.374,11.509,14.719l0.016,0.016c5.345,5.345,10.083,9.333,14.718,11.51c5.145,2.418,10.156,1.807,13.472-1.566 l3.02-3.02c1.534-1.534,1.884-3.872,0.865-5.797C51.343,42.18,44.369,38.062,44.076,37.889z M48.922,50.647l-3.02,3.02 c-2.569,2.569-6.632,2.995-11.309,1.182c-4.435-2.085-9.02-6.011-14.261-11.252c-5.24-5.24-9.166-9.825-11.252-14.261 c-1.813-4.677-1.387-8.74,1.182-11.309l3.02-3.02c1.181-1.181,2.724-1.437,4.426-0.492c2.963,1.563,6.12,7.652,7.367,9.914 c0.254,0.435,0.496,0.857,0.726,1.257c-0.102,0.345-0.27,0.699-0.51,1.076c-1.16,1.778-2.703,2.904-3.107,3.178 c-4.452,3.02-4.378,8.586,0.248,13.212c2.731,2.731,5.74,5.626,8.495,8.498c4.59,4.671,10.194,5.338,13.237,0.537 c0.274-0.403,1.4-1.948,3.178-3.107c0.377-0.24,0.732-0.408,1.077-0.51c0.4,0.23,0.821,0.471,1.256,0.725 c2.262,1.247,8.351,4.404,9.914,7.367C50.359,47.922,50.103,49.466,48.922,50.647z">
                  </path>
                </g>
              </svg>
              <span className="text-sm">+917978896121</span>
            </div>
            <div className="flex items-center mt-5">
              <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1"
                id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485.211 485.211"
                style={{ enableBackground: 'new 0 0 485.211 485.211;' }} xmlSpace="preserve">
                <g>
                  <path
                    d="M342.606,0H142.605c-12.131,0-22.013,9.881-22.013,22.013v441.184c0,12.131,9.881,22.013,22.013,22.013h200.001
                                    c12.131,0,22.013-9.881,22.013-22.013V22.013C364.619,9.881,354.737,0,342.606,0z M208.08,18h68.967c2.208,0,4,1.791,4,4s-1.792,4-4,4
                                    h-68.967c-2.208,0-4-1.791-4-4S205.872,18,208.08,18z M242.605,474.61c-4.142,0-7.5-3.358-7.5-7.5c0-4.142,3.358-7.5,7.5-7.5
                                    c4.142,0,7.5,3.358,7.5,7.5C250.105,471.252,246.747,474.61,242.605,474.61z M359.619,428.484H125.591V56.484h234.029V428.484z">
                  </path>
                  <path
                    d="M215.838,94.734h53.533c2.208,0,4-1.791,4-4s-1.792-4-4-4h-53.533c-2.208,0-4,1.791-4,4S213.63,94.734,215.838,94.734z">
                  </path>
                  <path
                    d="M266.938,390.734h-48.667c-2.208,0-4,1.791-4,4s1.792,4,4,4h48.667c2.208,0,4-1.791,4-4S269.146,390.734,266.938,390.734z">
                  </path>
                </g>
              </svg>
              <span className="text-sm">sumankpadhan@gmail.com</span>
            </div>
          </div>
          <div className="md:col-span-8 p-10">
            <form action="#" className="p-5">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-black">First Name</label>
                  <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="First Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Last Name</label>
                  <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Last Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Email</label>
                  <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Phone</label>
                  <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Phone" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-black">Message</label>
                  <textarea rows="5" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Your message"></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="mt-1 p-2 w-full bg-indigo-600 text-white rounded-md">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About

{/**<div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col">
        <span className="text-center font-bold my-10 opacity-30">
          MDI (npm i @mdi/font) required for all icons
          <hr className="my-4" />
          <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            Converter to SASS
          </a>
        </span>

        <div className="flex flex-col items-center">
          <div className="text-indigo-500 font-bold text-7xl">
            404
          </div>
          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>
          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
        </div>

        <div className="flex flex-col mt-48">
          <div className="text-gray-400 font-bold uppercase">
            Continue With
          </div>

          <div className="flex flex-col items-stretch mt-5">
            {[
              { icon: 'home-outline', title: 'Home Page', description: 'Everything starts here' },
              { icon: 'book-open-page-variant-outline', title: 'Blog', description: 'Read our awesome articles' },
              { icon: 'archive-settings-outline', title: 'Archive', description: 'Archived posts but still readable' },
              { icon: 'at', title: 'Contact', description: 'Contact us for your questions' },
            ].map((item, index) => (
              <div key={index} className="flex flex-row group px-4 py-8 border-t hover:cursor-pointer transition-all duration-200 delay-100">
                <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                  <i className={`mdi mdi-${item.icon} mx-auto text-indigo-800 text-2xl md:text-3xl`}></i>
                </div>
                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                    {item.title}
                  </div>
                  <div className="font-semibold text-sm md:text-md lg:text-lg text-gray-400 group-hover:text-gray-500 transition-all duration-200 delay-100">
                    {item.description}
                  </div>
                </div>
                <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2 group-hover:text-black transition-all duration-200 delay-100"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div> */}