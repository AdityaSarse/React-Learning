import react from 'react'
import card from './components/card'
import navBar from './components/navBar'
function App() {
  return (
    <>
      {card()}
      {navBar()}
    </>
  )
}

export default App
