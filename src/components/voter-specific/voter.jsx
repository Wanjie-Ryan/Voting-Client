import React, {useState, useEffect } from 'react'
import './voter.css'
import {useParams, useLocation} from 'react-router-dom'
// import image from '../assets/icon-votes.jpg'
import axios from 'axios'
import {Image} from 'cloudinary-react'
import {TbFidgetSpinner} from 'react-icons/tb'
import Cookies from 'js-cookie'
import sweetAlert from 'sweetalert2'





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

          // console.log(singAsp)

        }

        catch(err){

          // console.log(err)
          seterrmsg('There seems to be an error please refresh the page')
          setloading(false)

        }

      }

      fetchSingleAspirant()

    }, [id])


    const [name, setname] = useState()
    const [contact, setcontact] = useState()
    // const [errmsg, seterrmsg] = useState()

    const handleName = (e)=>{

      setname(e.target.value)
    }

    const handleContact = (e)=>{

      setcontact(e.target.value)
    }

    const handleSubmit = async(e)=>{

      e.preventDefault()

      if(!name || !contact){

        sweetAlert.fire({

          icon:'error',
          title:'oops...',
          text:'Please Enter all Details of the Submission form'

      })

      return

      }

      setloading(true)

      try{

        const voterDetails ={

          AspirantID:id,
          name:name,
          phoneNumber:contact

        }

        const voterData = await axios.post('http://localhost:3007/api/voters/submission', voterDetails)

        // console.log(voterData)

        Cookies.set('VoterToken', voterData.headers.votertoken)

        // console.log(VoterToken)

        sweetAlert.fire({

          title:'Your vote has been counted!',
          text:voterData.data.msg,
          icon:'success',
          
      })

      setloading(false)

      }

      catch(err){

        // console.log(err)
        seterrmsg('There seems to be an error please refresh the page')
        setloading(false)

      }
    }


    useEffect(() => {

      const checkauth = async () => {

              if (!Cookies.get().VoterToken || Cookies.get().VoterToken === undefined) {

                  // No token found, redirect to login page
                  // console.log('not logged in (token not found)')
                  // console.log('eligible to vote')
                  // setIsLogged(false)

                  // navigate('/login')
              } 
              else {

                  const token = Cookies.get().VoterToken
                  console.log(token)
                  const res = await axios({method:'get', url:'http://localhost:3007/api/voters/verify', headers:{Authorization:'Bearer ' + token}, data:{}})
                  if (res.data.type !== 'success') {
                  // console.log('not logged in (invalid token)')
                  // console.log('eligible to vote')


                  // navigate('/login')

                  // setIsLogged(false)
                  }
                  // setIsLogged(true)
              }

      }

      checkauth()

  }, [])


  const token = Cookies.get().VoterToken

  // const handleVote =()=>{


    
  //       if(token){

  //         sweetAlert.fire({

  //           title:'Your vote has already been counted!',
  //           text:'You have already voted, you want to vote twice?',
  //           icon:'error',
            
  //         })
          
  //     }
  
  // }

    

    
  return (


    <>

        <section className="voter-specific">


            {/* {singAsp.map((persons)=>( */}


              
              {singAsp?(
              
                
                
                
                <div className="voter-specific--container"  >
                  <div className="img-container-voter">

                    {loading ? <TbFidgetSpinner className='spinner-loader'/> :(

                      <img src={singAsp.image} alt={singAsp.name} className="img-voter" />

                      )
                    }

                    {/* <Image cloudName ='https://api.cloudinary.com/v1_1/djgk2k4sw/image/upload' publicId ={singAsp.image} className ='img-voter' alt ='singAsp.name'/> */}


                  </div>

                  <h3 className ='asp-name'> Aspirant Name:<span className ='span-name'>{singAsp.name}</span></h3>
                  
                  {errmsg && <p className ='error'>{errmsg}</p>}

                    <form  className ='form-container' onSubmit = {handleSubmit}>

                      <div className="name">

                      
                        <label className='lbl' htmlFor='name'>Your Name:</label>
                        <input type ='text' palceholder = 'Enter your name' name ='name' onChange ={handleName} value ={name}/>

                      </div>

                      <div className ='name'>

                        <label className='lbl' htmlFor='name'>Your PhoneNumber:</label>
                        <input type='tel' palceholder = 'Enter your phonenumber' name ='contact' onChange ={handleContact} value ={contact}/>

                      </div>


                      <button className="btn-cont" disabled ={token}>Confirm Vote</button>

                    </form>
                  <p className ='vote-p'>0 Votes</p>

                </div>):(

                  <TbFidgetSpinner className='spinner-loader'/>

                )}
                
                {/* )) */}
            {/* } */}


        </section>
    
    
    
    </>



  )
}

export default Voter