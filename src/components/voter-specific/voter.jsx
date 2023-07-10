import React, {useState, useEffect } from 'react'
import './voter.css'
import {useParams, useLocation} from 'react-router-dom'
// import image from '../assets/icon-votes.jpg'
import axios from 'axios'
import {Image} from 'cloudinary-react'


function Voter() {

    const {id} = useParams()
    // console.log(id)

    const [errmsg, seterrmsg] = useState()
    const [loading, setloading] = useState(false)
    const [singAsp, setsingAsp] = useState()

    useEffect(()=>{

      const fetchSingleAspirant = async()=>{

        try{

          const singleAspirant = await axios.get(`http://localhost:3007/api/admin/allaspirants/${id}`)
          // console.log(singleAspirant)

          const singleAspData = singleAspirant.data.singleAsp

          // console.log(singleAspData)

          setsingAsp(singleAspData)

          setloading(false)

          console.log(singAsp)

        }

        catch(err){

          console.log(err)
          seterrmsg('There seems to be an error please refresh the page')
          setloading(false)

        }

      }

      fetchSingleAspirant()

    }, [id])

    

    
  return (


    <>

        <section className="voter-specific">


            {/* {singAsp.map((persons)=>( */}


              
              <form className="voter-specific--container" >

                

                  <div className="img-container-voter">

                    <img src={singAsp.image} alt={singAsp.name} className="img-voter" />

                    {/* <Image cloudName ='https://api.cloudinary.com/v1_1/djgk2k4sw/image/upload' publicId ={singAsp.image} className ='img-voter' alt ='singAsp.name'/> */}


                  </div>

                  <h3 className ='asp-name'> Aspirant Name:<span className ='span-name'>{singAsp.name}</span></h3>
                  
                  {errmsg && <p className ='error'>{errmsg}</p>}

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
                
                {/* )) */}
            {/* } */}


        </section>
    
    
    
    </>



  )
}

export default Voter