import { useState } from 'react'
import './App.css'
import { Textarea } from "@/components/ui/textarea"
import HighlightedText from '@/components/HighlightedText'

function App() {
  const [highlightedText, setHighlightedText] = useState("");

  return (
    <div className="flex h-screen p-4">
    <h3 className='block'>Language Learning App</h3>
          <div className="w-1/2 pr-4">
            <Textarea setHighlightedText={setHighlightedText}/>
          </div>
          <div className="flex-1 pl-4">
          <HighlightedText highlightedText={highlightedText}/>
          </div>
      </div>
  )
}

export default App
