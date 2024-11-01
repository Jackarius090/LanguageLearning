// TODO Add dark mode
// TODO Add GPT function

import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import NavBar from './components/NavBar'
import HighlightedText from '@/components/HighlightedText'
import DarkModeSwitch from "@/components/DarkModeSwitch"


function App() {
  const [highlightedText, setHighlightedText] = useState("Highlight a word to see its definition!");
  const [translation, setTranslation] = useState('');  // Holds the translated text
  const [text, setText] = useState('')

  return (
    <div className="size-full min-h-screen ">
      <div className="m-6 ml-48">
        <NavBar className="flex flex-wrap" setText={setText}/>
      </div>
      <div className="w-full mb-8 flex items-center">
        <img src='/favicon-512x512.png' className='w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 mx-10'></img>
        <h2 className="w-9/12 text-2xl md:text-3xl lg:text-4xl font-bold">Language Learning App</h2>
        <div className="flex items-center space-x-2">
          <DarkModeSwitch/>
        </div>
      </div>
      <div className="flex pt-8 mb-4 h-screen border-2">
        <div className='flex size-full p-5'>
          <div className="w-3/5 pr-4 h-full">
            <Textarea setHighlightedText={setHighlightedText} 
                      setTranslation={setTranslation}
                      text={text}
                      setText={setText}
                      />
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
