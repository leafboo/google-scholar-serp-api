import { useEffect, useState } from 'react';
import './App.css'

function App() {

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const url = "http://localhost:3000/?q=Saturn"
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)



    } catch(error: unknown) {
      if (typeof error === "string") {
        error.toUpperCase() // works, `e` narrowed to string
    } else if (error instanceof Error) {
        error.message // works, `e` narrowed to Error
    }
    }
  }

  return (
    <>
      <span>hello world</span>
    </>
  )
}

export default App
