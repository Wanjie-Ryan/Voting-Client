import React, {useState, useEffect} from 'react'
import './home.css'
import image from '../assets/icon-votes.jpg'
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Image} from 'cloudinary-react'
import {TbFidgetSpinner} from 'react-icons/tb'




function Home() {

    // const aspirants = [

    //     {
    //         id:1,
    //         image:image,
    //         name:'Ryan',
    //         position:'Delegate',
    //         school:'Engineering and Technology',
    //         btn:'vote'
    //     },

    //     {
    //         id:2,
    //         image:image,
    //         name:'Rose',
    //         position:'Delegate',
    //         school:'Engineering and Technology',
    //         btn:'vote'
    //     },

    //     {
    //         id:3,
    //         image:image,
    //         name:'Jimmy',
    //         position:'Delegate',
    //         school:'Engineering and Technology',
    //         btn:'vote'
    //     },

    //     {
    //         id:4,
    //         image:image,
    //         name:'Kale',
    //         position:'Delegate',
    //         school:'Engineering and Technology',
    //         btn:'vote'
    //     },

    //     {
    //         id:5,
    //         image:image,
    //         name:'Juliet',
    //         position:'Delegate',
    //         school:'Engineering and Technology',
    //         btn:'vote'
    //     },

    //     {
    //         id:6,
    //         image:image,
    //         name:'Kim',
    //         position:'Delegate',
    //         school:'Engineering and Technology',
    //         btn:'vote'
    //     },




    // ]

    const [loading, setloading] = useState(false)
    const [errmsg, seterrmsg] = useState('')
    const [aspirants, setaspirants] = useState([])

    useEffect(()=>{

        const fetchAspirants = async()=>{

            try{

                setloading(true)

                const fetchedAsps = await axios.get('http://localhost:3007/api/admin/allaspirants')

                console.log(fetchedAsps)

                const {allaspirants} = fetchedAsps.data

                console.log(allaspirants)

                setaspirants(allaspirants)

                setloading(false)

            }

            catch(err){

                console.log(err)
                seterrmsg('There seems to be an error please refresh the page and try again')
                setloading(false)


            }


        }

        fetchAspirants()



    },[])

    // const navigate = useNavigate()

    // const handleClick =(id)=>{

    //     navigate(`/voter/${id}`)


    // }


  return (


    <>


        <section className="voters">

            <h1 className="aspirants-title">And Our Aspirants are</h1>

                <div className="main-aspirants-cont">

                    {aspirants.map((person)=>(
                        
                        <div className ='aspirant-containers' key ={person._id}>

                            <div className="aspirant-cont">

                                <div className="imgs"><img className ='asp-img' src ={person.image} alt ={person.name}/></div>

                                <div className ='aspirant-details'>

                                    <h3 className ='asp-name'> Aspirant Name:{person.name}</h3>
                                    <h3 className ='asp-name'> Aspirant Position:{person.Position}</h3>
                                    <h3 className ='asp-name'> Aspirant School:{person.Represent}</h3>

                                    <Link to= {{ pathname: `/voter/${person._id}`  }} >

                                     <button className="btn-cont" >Vote</button>
                                    
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}


                </div>


        </section>

    </>




  )
}

export default Home