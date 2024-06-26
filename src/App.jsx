import React from 'react'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'


function App() {
  return (
    <div className='min-h-screen max-w-screen bg-gradient-to-br from-indigo-800 to-purple-400 overflow-hidden' >
      <Navbar/>
      <Cards/>
    </div>
  )
}

export default App
