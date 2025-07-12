import './App.css'
import List from './List'
import Button from './Button'
import { useForm } from 'react-hook-form'
import { useState } from 'react'


// get the formData
// pass the query as props 

export default function App() {
  const { register, handleSubmit } = useForm()
  const [searchQuery, setSearchQuery] = useState()
  

  // Display the data
  return (
    <>
      <div className='flex justify-center mt-5'>
        <div>
          <div className='flex justify-center'>
            <form onSubmit={handleSubmit((data) => {
              setSearchQuery(data.searchQuery)
            })}>
              <input {...register("searchQuery")} type="text" placeholder='Search for a topic' className='border-2 h-[2.5rem] w-[20rem] pl-2' required />
              <button className='bg-blue-400 text-white p-2.5 ml-6 duration-[0.15s] hover:bg-blue-700 cursor-pointer'>Search</button>
            </form>
          </div>
          <List query={searchQuery ?? null} />
          <Button />
        </div>
      </div>
      
      
    </>
  )
}

