import './App.css'
import List from './List'
import Button from './Button'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

type SelectedPaper = {
  id: string
}

// get the formData
// pass the query as props 

export default function App() {
  const { register, handleSubmit } = useForm()
  const [searchQuery, setSearchQuery] = useState()
  const [selectedPapers, setSelectedPapers] = useState<SelectedPaper[]>([]) // <SelectedPaper[]> means the variable only accepts an array of objects with type 'SelectedPaper'


  function updateSelectedPapers(obj: SelectedPaper, isChecked: boolean) {
    if(isChecked) {
      const newSelectedPapers = [...selectedPapers, obj];
      setSelectedPapers(newSelectedPapers);
    } else {
     

      const newArray = selectedPapers.filter((paper) => paper.id !== obj.id)
      setSelectedPapers(newArray)

    }


  }



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
          <List query={searchQuery ?? null} updateSelectedPapers={updateSelectedPapers} />
          {
            selectedPapers.length !== 0 ? <Button /> : ""
          }
          <div className='mt-[2rem]'>Papers selected: {selectedPapers.length === 0 ? "0" : selectedPapers.length.toString()}</div>
        </div>
      </div>
      
      
    </>
  )
}

