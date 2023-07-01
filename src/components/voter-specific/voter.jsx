import React, { useEffect } from 'react'
import './voter.css'
import {useParams, useLocation} from 'react-router-dom'
import image from '../assets/icon-votes.jpg'



function Voter() {

    const location = useLocation()

    

    
  return (


    <>

        <section className="voter-specific">

            <form className="voter-specific--container">

              <div className="img-container-voter">

                <img src={image} alt="" className="img-voter" />

              </div>

              <h3 className ='asp-name'> Aspirant Name:<span>Ryan</span></h3>

              <div className="name">

              
                <label className='lbl' htmlFor='name'>Your Name:</label>
                <input type ='text' palceholder = 'Enter your name'/>

              </div>

              <div className ='name'>

                <label className='lbl' htmlFor='name'>Your Email:</label>
                <input type='email' palceholder = 'Enter your name'/>

              </div>


              <button className="btn-cont">Confirm Vote</button>

              <p className ='vote-p'>0 Votes</p>

            </form>


        </section>
    
    
    
    </>



  )
}

export default Voter