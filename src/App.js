import React from 'react'
import HomeVoter from '../src/pages/home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Voters from '../src/pages/voter/voter'


function App() {


  return (


    <>

      <BrowserRouter>
        <Routes>


      
        <Route path= '/' element ={<HomeVoter/>}/>
        <Route path ='/voter/:id' element ={<Voters/>}/>
      
        </Routes>
      </BrowserRouter>


      



    
    
    
    
    </>


  )
}

export default App