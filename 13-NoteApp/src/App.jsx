import React, { useState } from 'react'
import { X } from 'lucide-react';



const App = () => {

  const [Title, setTitle] = useState("")
  const [Details, setDetails] = useState("")
  const [Task, setTask] = useState([])


  const submitNote = (e) => {
    e.preventDefault();
    console.log("Note submitted by ", Title);
    console.log("Note details: ", Details);

    const copyTask = [...Task]
    copyTask.push({ Title, Details })
    setTask(copyTask)

    setTitle("")
    setDetails("")
  }

  const deleteNote = (index) => {
    const copyTask = [...Task];
    copyTask.splice(index, 1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen w-full bg-black text-white flex flex-col lg:flex-row'>
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 p-10 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-800">
        <form onSubmit={(e) => {
          submitNote(e)
        }} className="flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0">

          <h1 className='text-2xl font-bold w-full text-center lg:text-left'>Add Notes</h1>

          {/* first input for title  */}
          <input type="text" placeholder='Title' className='p-3 rounded-md border border-gray-600 bg-transparent text-white font-bold w-full outline-none focus:border-white' value={Title}
            onChange={(e) => {
              setTitle(e.target.value)
            }} />
          {/* second input for note */}
          <textarea placeholder='Note' className='p-3 rounded-md border border-gray-600 bg-transparent text-white font-bold h-40 resize-none w-full outline-none focus:border-white' value={Details}
            onChange={(e) => {
              setDetails(e.target.value)
            }} />

          {/* submit button */}
          <button type='submit' className='p-3 rounded-md bg-white text-black font-bold w-full hover:bg-gray-200 transition-colors'>Add Note</button>
        </form>
      </div>

      {/* Right Section - Notes */}
      <div className="h-full w-full lg:w-1/2 p-10 flex flex-wrap gap-4 content-start justify-center lg:justify-start overflow-y-auto">
        <h1 className='text-2xl font-bold w-full text-center lg:text-left'>Your Notes</h1>
        <div className="cards flex flex-wrap gap-2 h-full overflow-auto scrollbar-none">

          {Task.map((item, index) => {
            return (
              <div key={index} className="relative h-60 w-full bg-cover bg-center sm:w-38 lg:w-48 bg-[url('https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=400&q=80')] rounded-2xl text-black shadow-lg p-4">
                <button 
                  onClick={() => deleteNote(index)}
                  className='absolute top-3 right-3 p-1 bg-white/50 hover:bg-white rounded-full transition-colors backdrop-blur-sm'
                  aria-label="Delete Note"
                >
                  <X size={20} className="text-black" />
                </button>
                <h1 className='text-2xl font-bold pr-8 truncate'>{item.Title}</h1>
                <p className='text-slate-800 font-medium mt-2 line-clamp-6'>{item.Details}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default App
