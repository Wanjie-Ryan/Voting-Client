import React from 'react'
import HomeVoter from '../src/pages/home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (


    <>

      <BrowserRouter>
        <Routes>


      
        <Route path= '/' element ={<HomeVoter/>}/>
      
        </Routes>
      </BrowserRouter>


      



    
    
    
    
    </>


  )
}

export default App