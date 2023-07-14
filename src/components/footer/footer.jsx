import React from 'react'
import './footer.css'
import {BsGithub,BsTwitter} from 'react-icons/bs'
import { Link } from "react-router-dom";



function Footer() {

    const year = new Date().getFullYear()



  return (


    <>


        <footer className="footer">

            <div className="site-footer--container">

                <div className="site-footer--logo">
                    
                    <p>Reach Us at:</p>

                    <a href ='https://github.com/Wanjie-Ryan/Voting-Client' className='icons' target="_blank" rel="noopener noreferrer"><BsGithub className='icons-s' /></a>

                    <a href = 'https://twitter.com' className='icons' target="_blank" rel="noopener noreferrer"><BsTwitter  className='icons-s'/></a>



                </div>

                <nav className="site-footer--nav">

                   <div className="site-footer--col">
                        <h5 className="-title">Sisi Voters</h5>
                        <ul className="-list">
                            <li>
                                <Link to="/about" className='footer-links'>About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className='footer-links'>Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className='footer-links'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                </nav>

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
                                <a href="/map" className='footer-links'>Map</a>
                            </li>

                            <li>
                                <a href="tel:+254791618714" className='footer-links'>Developed by +254791618714. Wanjie</a>
                            </li>
                        </ul>

                    </div>


            </div>


            <div className="site-footer--copyright"><p className='footer-links'>Copyright © {year} Sisi Voters. All rights reserved.</p></div>



        </footer>

    
    </>


  )
}

export default Footer