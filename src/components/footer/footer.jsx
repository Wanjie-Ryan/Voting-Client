import React from 'react'
import './footer.css'
import {BsGithub,BsTwitter} from 'react-icons/bs'
import { Link } from "react-router-dom";



function Footer() {

    const year = new Date().getFullYear()



  return (


    <>

        <footer className="footer">

            <main className="footer-main">

                <h2 className ='footer-title'>Sisi voters</h2>


                    <div className="site--footer">

                        <p className='p-footer'>Reach me at:</p>

                        <a href ='https://github.com/Wanjie-Ryan/Voting-Client' className='icons' target="_blank" rel="noopener noreferrer"><BsGithub className='icons-s' /></a>

                        <a href = 'https://twitter.com/RWanjie' className='icons' target="_blank" rel="noopener noreferrer"><BsTwitter  className='icons-s'/></a>


                    </div>

                    <nav className="site-footer--nav">

                        <div className="site-footer--col">

                                <h5 className="-title">Sisi Voters</h5>
                                <ul className="-list">
                                    <li>
                                        <a href="https://sisi-voters-aspirant.vercel.app/" className='footer-links'>Aspirant</a>
                                    </li>
                                    
                                    <li>
                                        <Link to="/contact" className='footer-links'>Contact</Link>
                                    </li>
                                </ul>

                        </div>


                        <div className="site-footer--col">

                                <h5 className="-title">Product</h5>
                                <ul className="-list">
                                    <li>
                                        <Link to="/tutorial" className='footer-links'>Tutorials</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms" className='footer-links'>Terms of service</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy" className='footer-links'>Privacy Policy</Link>
                                    </li>
                                </ul>

                        </div>

                        <div className="site-footer--col">

                            <h5 className="-title">Contact</h5>
                            <ul className="-list">
                                <li>
                                    <a href="mailto:ryanwanjie1@gmail.com" className='footer-links'>Email</a>
                                </li>
                                
                                <li>
                                    <a href="tel:+254791618714" className='footer-links'>Developed by +254791618714. Wanjie</a>
                                </li>
                            </ul>

                        </div>


                     </nav>



            </main>

            <div className="site-footer--copyright"><p className='footer-links'>Copyright © {year} Sisi Voters. All rights reserved.</p></div>




        </footer>

    
    </>


  )
}

export default Footer




