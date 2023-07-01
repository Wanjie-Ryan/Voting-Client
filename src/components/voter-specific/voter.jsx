import React, { useEffect } from 'react'
import './voter.css'
import {useParams, useLocation} from 'react-router-dom'



function Voter() {

    const location = useLocation()

    

    
  return (


    <>

        <section className="voter-specific">

            <div className="voter-specific--container">

              <div className="img-container-voter">

                <img src="" alt="" className="img-voter" />

              </div>

              <p>Name:<span>Ryan</span></p>
              <p>Position:<span>Delegate</span></p>
              <p>School:<span>Engineering and Technology</span></p>

              <button className="btn-cont">Confirm Vote</button>

            </div>


        </section>
    
    
    
    </>



  )
}

export default Voter