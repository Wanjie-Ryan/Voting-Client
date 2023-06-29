import React from 'react'
import './home.css'
import image from '../assets/icon-votes.jpg'



function Home() {

    const aspirants = [

        {
            id:1,
            image:{image},
            name:'Ryan',
            btn:'vote'
        },

        {
            id:2,
            image:'../assets/icon-votes.jpg',
            name:'Rose',
            btn:'vote'
        },

        {
            id:3,
            image:'../assets/icon-votes.jpg',
            name:'Jimmy',
            btn:'vote'
        },

        {
            id:4,
            image:'../assets/icon-votes.jpg',
            name:'Kale',
            btn:'vote'
        },

        {
            id:5,
            image:'../assets/icon-votes.jpg',
            name:'Juliet',
            btn:'vote'
        },

        {
            id:6,
            image:'../assets/icon-votes.jpg',
            name:'Kim',
            btn:'vote'
        },




    ]


  return (


    <>


        <section className="voters">

            <h1 className="aspirants-title">And Our Aspirants are</h1>

            {aspirants.map((person)=>(


                
                <div className ='aspirant-containers' key ={person.id}>

                    <div className="aspirant-cont">

                        <img className ='asp-img' src ={person.image} alt ={person.name}/>
                        <h3 className ='asp-name'>{person.name}</h3>
                        <button className="btn-cont">{person.btn}</button>


                    </div>

            </div>

            ))}










        </section>



    
    
    
    
    
    </>




  )
}

export default Home