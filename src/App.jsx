import { useState } from 'react'
import './App.css'
import { Textarea } from "@/components/ui/textarea"
import HighlightedText from '@/components/HighlightedText'

function App() {
  const [highlightedText, setHighlightedText] = useState("");

  return (
    <div className="size-full p-4">
      <div className="w-full pb-8 mb-8">
        <h2 className="w-full text-3xl font-bold">Language Learning App</h2>
      </div>
      <div className="flex pt-8 h-screen border-2">
        <div className='flex size-full p-5'>
          <div className="w-3/5 pr-4 h-full">
            <Textarea setHighlightedText={setHighlightedText}/>
          </div>
          <div className="flex-1 pl-4">
            <HighlightedText highlightedText={highlightedText}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
