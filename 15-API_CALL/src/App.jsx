import React from 'react'
import axios from 'axios';

const App = () => {

  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const data = await response.json();
  //   console.log(data);
  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
  }
  return (
    <div className='h-screen w-full bg-black text-white flex flex-col'>
      <h1 className='text-2xl font-bold w-full text-center lg:text-left'>API CALL</h1>
      {/* <button onClick={getData} className='p-3 rounded-md bg-white text-black font-bold w-full hover:bg-gray-200 transition-colors mt-20'>Get Data</button> */}
      <button onClick={getData} className='p-3 rounded-md bg-white text-black font-bold w-full hover:bg-gray-200 transition-colors mt-20'>Get Data</button>
    </div>
  )
}

export default App