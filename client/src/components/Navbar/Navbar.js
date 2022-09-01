import React from 'react'
import './styles.css'

const Navbar = () => {
  return (
    <div className='wrapper'>
       <div className='menuPanel'>
           <a className='menuItem' href='/'>Home</a>
           <a className='menuItem' href='/about'>About</a>
           <a className='menuItem' href='/work'>Work</a>
           <a className='menuItem' href='/skills'>Skills</a>
           <a className='menuItem' href='/contact'>Contact</a>
       </div>
       <div className='resumeButton'>
         <a href='Resume-Suhas.pdf' download='Resume-Suhas.pdf'>
            <button className='viewResume'>View CV</button>
         </a>
          
       </div>
    </div>
  )
}

export default Navbar