import React, {useState} from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import VLogo from '../assets/icon-votes.jpg'
import { AiOutlineClose } from "react-icons/ai";


function Navbar() {

    const [shownav, setshownav] = useState(false);


  return (


    <>


        <nav className="navbar">

            <div className='main-navbar'>

                <Link to="/" className ='home'>

                    <div className="navbar--logo">

                        <div className="flip-box img-logo">

                            <div class="flip-box-inner">
                            <div class="flip-box-front">
                                <Link to="/" className ='home'>
                                {" "}

                                <img className="logo" src={VLogo} alt="logo" />

                                </Link>
                            </div>

                            <div class="flip-box-back">

                                <Link to="/" className ='home' style={{ textDecoration: "none" }}>

                                    Let's Unite and Vote, Sisi Voters!
                                
                                </Link>

                            </div>

                            </div>

                        </div>


                    </div>


                </Link>


                <div className="navbar--details">

                    <div className="flex-direction-left">

                        <p>

                            <Link to="" className="home">
                            Admin
                            </Link>

                        </p>

                        <p>

                            <Link to="" className="home">
                            Aspirant
                            </Link>

                        </p>

                        <p>

                            <Link to="/contact" className="home">
                            Contact
                            </Link>

                        </p>

                    
                    </div>

                    <div className="signup-button">

                        <BiMenu className="menu" onClick={() => setshownav(!shownav)} />

                    </div>


                </div>

            </div>

        </nav>


         {shownav &&(
         
         <aside>

                    <div className="backdrop" onClick={() => setshownav(!shownav)}></div>

                    <div className="side">

                        <div className="close-btn">

                            <AiOutlineClose
                            className="close"
                            onClick={() => setshownav(!shownav)}
                            />

                        </div>

                    </div>


                    <div className="side-logo">

                        <div className="side-main-logo">

                            <div className ='flip-box '>

                                <div className="flip-box-inner">

                                    <div className="flip-box-front main-logo">


                                        <Link to='/' className ='home'>

                                        <img src={VLogo} alt="" className="side-logos" />


                                        </Link>
                                    </div>


                                    <div class="flip-box-back">

                                        <Link to="/" className ='home' style={{ textDecoration: "none" }}>
                                            <p>

                                            Let's Unite and Vote, Sisi Voters!
                                            
                                            </p>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>


                    <div className="side-details">

                        <p>Admin</p>
                        <hr></hr>
                        <p>Aspirant</p>
                        <hr></hr>
                        <p>Voter</p>



                    </div>


        </aside>
        
        )}

    
    </>


  )
}

export default Navbar