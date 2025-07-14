import './App.css'
import List from './List'
import Button from './Button'
import { useForm } from 'react-hook-form'
import {useEffect, useState} from 'react'

type SelectedPaper = {
  id: string
}

// get the formData
// pass the query as props 

export default function App() {
  const { register, handleSubmit } = useForm()
  const [searchQuery, setSearchQuery] = useState()
  const [selectedPapers, setSelectedPapers] = useState<SelectedPaper[]>([]) // <SelectedPaper[]> means the variable only accepts an array of objects with type 'SelectedPaper'


  useEffect(() => {
    console.log(selectedPapers);
  }, [selectedPapers]);


  console.log(selectedPapers);

  function updateSelectedPapers(obj: SelectedPaper, isChecked: boolean) {
    if(isChecked) {
      const newSelectedPapers = [...selectedPapers, obj];
      setSelectedPapers(newSelectedPapers);
    } else {
      // iterate over the selected Papers and delete the object that has the same value as obj parameter
      selectedPapers.forEach((paper) => {
        if (paper.id === obj.id) {
          const index = selectedPapers.findIndex(paper => paper.id === obj.id)
          selectedPapers.splice(index, 1)
          console.log(selectedPapers)
          return;
        }
      })

    }


  }

  console.log(selectedPapers);


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
          <Button /> /* when selected Papers is empty, do not display button */
        </div>
      </div>
      
      
    </>
  )
}

