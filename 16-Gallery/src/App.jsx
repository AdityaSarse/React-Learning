import React, { useEffect, useState } from 'react'

const App = () => {

  const [Data, setData] = useState([])
  const [index, setIndex] = useState(1)
  useEffect(() => {
    getdata()
  }, [index])

  const getdata = async () => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=28`)
    const data = await response.json()
    setData(data)
  }

  let printUserData = " NO Data Avaliable"

  if (Data.length > 0) {
    printUserData = Data.map(function (elem, idx) {
      return <div className='mt-10px' key={idx}>
        <a href={elem.url}>
          <div className='w-60 h-45 overflow-hidden rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer '>
            <img className='w-60 h-45' src={elem.download_url} alt={elem.author} />
          </div>
          <div className='w-60 h-10 bg-white'>
            <p>{elem.author}</p>
          </div>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-gray-100'>
      <h1 className='text-center text-2xl font-bold mt-10px'>Gallery</h1>
      <div className='flex flex-wrap gap-4 justify-center items-center scrollbar-hide ml-10px'>
        {printUserData}
      </div>
      <div className='flex gap-4 justify-center items-center mt-10px'>
        <button onClick={() => {
          if (index > 1) setIndex(index - 1)
        }} className='bg-blue-500 text-white px-4 py-2 rounded-lg w-20 items-center'>Previous</button>
        <button className='bg-black text-white px-4 py-2 rounded-lg w-20'>current</button>
        <button onClick={() => setIndex(index + 1)} className='bg-blue-500 text-white px-4 py-2 rounded-lg w-20'>Next</button>
      </div>
    </div>
  )
}

export default App