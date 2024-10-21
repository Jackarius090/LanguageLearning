import { useState } from 'react'
import './App.css'
import { Textarea } from "@/components/ui/textarea"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='object-top'>Language Learning App</h1>
      <div>
        <label>
          Insert text here:
          <Textarea/>
        </label>
      </div>
    </>
  )
}

export default App
