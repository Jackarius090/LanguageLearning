import { useState } from 'react'
import './App.css'
import { Textarea } from "@/components/ui/textarea"
import HighlightedText from '@/components/HighlightedText'


function App() {
  const [highlightedText, setHighlightedText] = useState("Highlight a word to see its definition!");
  const [translation, setTranslation] = useState('');  // Holds the translated text

  return (
    
    <div className="size-full p-4">
      <div className="w-full pb-8 mb-8 flex items-center">
        <img src='public/favicon-512x512.png' className='w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 mx-10'></img>
        <h2 className="w-9/12 text-2xl md:text-3xl lg:text-4xl font-bold">Language Learning App</h2>
      </div>
      <div className="flex pt-8 h-screen border-2">
        <div className='flex size-full p-5'>
          <div className="w-3/5 pr-4 h-full">
            <Textarea setHighlightedText={setHighlightedText} 
                      setTranslation={setTranslation}/>
          </div>
          <div className="flex-1 pl-4">
            <HighlightedText highlightedText={highlightedText} translation={translation}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
