import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { toast } from 'react-toastify';

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0])

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }
  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const updateBookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }

    // console.log(bookObj);
    fetch(`http://localhost:5000/book/${id}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(updateBookObj)
})
.then(res => {
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
})
.then(data => {
  toast.success("Book Is Updated Successfully!!!");
  // You can uncomment the following line to see the response data in the console
  // console.log(data);
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});
    
  }

  return (
    <div className='px-4 my-20'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/**1st row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" defaultValue={bookTitle} required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
      </div>
      </div>
      {/**2nd row*/}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Image URL" />
        </div>
        <TextInput id="imageURL" name="ImageURL" type="text" placeholder="Image URL" defaultValue={imageURL} required />
      </div>
      {/* <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
      </div> */}
      {/** category */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
        <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id="categoryName" name="categoryName" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option}>{option}</option>)
          }
        </Select>
      </div>
      </div>
      {/**bookDescription */}
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='bookDescription' value='bookDescription'/>
          <Textarea id="bookDescription" name="bookDescription" defaultValue={bookDescription} placeholder="Write your book description..." required rows={5} />
        </div>
      </div>

      {/** book pdf link */}

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" defaultValue={bookPDFURL} placeholder="Enter Book Link" required />
      </div>

      <Button type="submit" className='mt-5'>Update Book</Button>
    </form>
    </div>  
  )
}

export default EditBooks