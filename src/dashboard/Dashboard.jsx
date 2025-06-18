import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  }, [])


  return (
    <div className="container mx-auto px-4 my-20">
      <div className="grid mb-4 px-4 py-4 rounded-3xl bg-gray-100 border-4 border-green-400">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="mt-8">
              <div className="flex items-center h-10 intro-y">
                <h2 className="mr-5 text-lg font-medium truncate">Dashboard</h2>
              </div>
              <div className="grid grid-cols-12 gap-6 mt-5">
                <a
                  className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">4510</div>
                        <div className="mt-1 text-base text-gray-600">Item Sales</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-yellow-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">40%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">5510</div>
                        <div className="mt-1 text-base text-gray-600">Inventory</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-pink-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                        />
                      </svg>
                      <div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">33%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">3510</div>
                        <div className="mt-1 text-base text-gray-600">Marketing</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                      <div className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">60%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">3720</div>
                        <div className="mt-1 text-base text-gray-600">Customer Growth</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-12 mt-5">
              <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
                <div className="bg-white shadow-lg p-4" id="chartline"></div>
                <div className="bg-white shadow-lg" id="chartpie"></div>
              </div>
            </div>
            <div className="col-span-12 mt-5">
              <div className="grid gap-2 grid-cols-1">
                <div className="bg-white p-4 shadow-lg rounded-lg">
                  <h1 className="font-bold text-base">Table</h1>
                  <div className="mt-4">
                    <div className="flex flex-col">
                      <div className="-my-2 overflow-x-auto">
                        <div className="py-2 align-middle inline-block min-w-full">
                          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                            {/**table for book data */}
                            <Table className='lg:w-[1180px]'>
                              <Table.Head>
                                <Table.HeadCell>No.</Table.HeadCell>
                                <Table.HeadCell>Book name</Table.HeadCell>
                                <Table.HeadCell>Author Name</Table.HeadCell>
                                <Table.HeadCell>Category</Table.HeadCell>
                                <Table.HeadCell>Prices</Table.HeadCell>
                              </Table.Head>
                              {
                                allBooks.map((book, index) => <Table.Body className="divide-y" key={book.id}>
                                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                      {index + 1}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                      {book.bookTitle}
                                    </Table.Cell>
                                    <Table.Cell>{book.authorName}</Table.Cell>
                                    <Table.Cell>{book.category}</Table.Cell>
                                    <Table.Cell>₹100.00</Table.Cell>
                                  </Table.Row>
                                </Table.Body>)
                              }
                            </Table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard