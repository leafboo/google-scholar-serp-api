import './App.css'
import List from './List'

export default function App() {
  

  // Display the data
  return (
    <>
      <div className='flex justify-center'>
        <div>
          <div className='flex justify-center'>Search bar</div>
          <List query="Saturn" />
        </div>
      </div>
      
      
    </>
  )
}

