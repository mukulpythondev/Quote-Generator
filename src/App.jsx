import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'


function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-indigo-800 to-purple-400 overflow-hidden' >
      <Navbar/>
      <Card/>
    </div>
  )
}

export default App