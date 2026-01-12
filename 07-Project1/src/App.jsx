import React from 'react'
import Section1 from './Components/Section1/section1'
import Section2 from './Components/Section2/section2'
const App = () => {

  const users = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "",
      tag: "Satisfied"

    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      desc: "",
      tag: "Undeserved"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "",
      tag: "Underbanked"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "",
      tag: "Underbanked"
    }

  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App