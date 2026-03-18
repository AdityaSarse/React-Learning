import React, { useState } from 'react'

const App = () => {

  const [num, setfirst] = useState(12)

  function changenum() {
    setfirst = 30
  }
  return (
    <div>
      <h1>The vale of A is {num} </h1>
      <button onClick={changenum()}>Click</button>
    </div>
  )
}

export default App