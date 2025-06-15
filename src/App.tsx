import './App.css'
import List from './List'

export default function App() {
  

  // Display the data
  return (
    <>
      <div className='flex justify-center'>
        <div>
          <span>Search bar</span>
          <List query="Saturn" />
        </div>
      </div>
      
      
    </>
  )
}

