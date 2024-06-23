import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cue from '../components/Cue'
import list from "../../public/list.json"

function Courses() {
  console.log(list);
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
     <Cue/>
    </div>
    
  
    <Footer/>
    </>
  )
}

export default Courses
