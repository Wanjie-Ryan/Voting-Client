import React from 'react'
import './home.css'
import image from '../assets/icon-votes.jpg'



function Home() {

    const aspirants = [

        {
            id:1,
            image:image,
            name:'Ryan',
            btn:'vote'
        },

        {
            id:2,
            image:image,
            name:'Rose',
            btn:'vote'
        },

        {
            id:3,
            image:image,
            name:'Jimmy',
            btn:'vote'
        },

        {
            id:4,
            image:image,
            name:'Kale',
            btn:'vote'
        },

        {
            id:5,
            image:image,
            name:'Juliet',
            btn:'vote'
        },

        {
            id:6,
            image:image,
            name:'Kim',
            btn:'vote'
        },




    ]


  return (


    <>


        <section className="voters">

            <h1 className="aspirants-title">And Our Aspirants are</h1>

                <div className="main-aspirants-cont">



                    {aspirants.map((person)=>(
                        
                        
                        
                        <div className ='aspirant-containers' key ={person.id}>

                            <div className="aspirant-cont">

                                <div className="imgs"><img className ='asp-img' src ={person.image} alt ={person.name}/></div>

                                <div className ='aspirant-details'>

                                    <h3 className ='asp-name'>{person.name}</h3>
                                    <button className="btn-cont">{person.btn}</button>

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