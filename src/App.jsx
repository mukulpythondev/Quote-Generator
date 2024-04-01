import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Cards'


function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-indigo-800 to-purple-400 overflow-hidden' >
      <Navbar/>
      <Cards/>
    </div>
  )
}

export default App
