import React, { useState, useEffect } from 'react'

const App = () => {

  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)

  useEffect(() => {
    console.log("useEffect")
  }, [num1])
  return (
    <div>
      <button onClick={() => setnum1(num1 + 1)}>num1: {num1}</button>
      <button onClick={() => setnum2(num2 + 1)}>num2: {num2}</button>
    </div>
  )
}

export default App