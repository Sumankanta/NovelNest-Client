import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//react icon
import { FaStar } from 'react-icons/fa6';
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/** text */}
                            <div className='mt-7'>
                                <p className='mb-5'>Haig's 'The Midnight Library' is a profound exploration of life's possibilities. Through Nora's journey, we're reminded of the beauty of second chances and the importance of embracing the present. </p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded
                                    className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Aarav Sharma</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/** text */}
                            <div className='mt-7'>
                                <p className='mb-5'>Fitzgerald's 'The Great Gatsby' is a timeless classic that delves into the complexities of the American Dream. With its vivid characters and lush prose, it offers a glimpse into the decadence and disillusionment of the Jazz Age.</p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded
                                    className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Priya Patel</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/** text */}
                            <div className='mt-7'>
                                <p className='mb-5'>Lee's 'To Kill a Mockingbird' is a powerful exploration of racial injustice and moral growth in the Deep South. Through the eyes of Scout Finch, we witness the courage and compassion of her father. </p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded
                                    className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Vikram Singh</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/** text */}
                            <div className='mt-7'>
                                <p className='mb-5'>Orwell's '1984' is a chilling dystopian masterpiece that continues to resonate with readers today. Set in a totalitarian regime where Big Brother watches your every move, it serves as a stark warning against the dangers. </p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded
                                    className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Ananya Das</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/** text */}
                            <div className='mt-7'>
                                <p className='mb-5'>Austen's 'Pride and Prejudice' is a delightful romantic comedy of manners that continues to enchant readers centuries after its publication. With its sharp wit and endearing characters, it offers a charming portrayal of love. </p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded
                                    className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Arjun Gupta</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/** text */}
                            <div className='mt-7'>
                                <p className='mb-5'>Salinger's 'The Catcher in the Rye' is a provocative coming-of-age novel that captures the angst and alienation of adolescence. Through the cynical and rebellious voice of Holden Caulfield.</p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded
                                    className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Ishita Rao</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Review