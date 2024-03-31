import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'

function Navbar() {
  return (
    <div className='h-14 px-4 flex items-center justify-between  w-full border border-b-slate-100' >
             <h1 className='text-4xl font-semibold text-white ' > Quote<span className='text-red-500 text-4xl' >Palette</span> </h1>
             <div className='flex gap-4' >
             <a href="https://www.linkedin.com/in/mukul-webdev/" target='_blank' >
              <LinkedInIcon fontSize='large' className='text-white hover:scale-105 hover:text-purple-200 ' /></a>
             
             <a href=" https://github.com/mukulpythondev/Quote-Generator"><GitHubIcon fontSize='large'  className='text-white hover:scale-105 ' /></a>
             </div>
    </div>
  )
}

export default Navbar