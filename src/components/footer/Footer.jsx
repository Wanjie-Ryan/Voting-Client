import React from 'react'
import './footer.scss'
import {BsGithub,BsTwitter} from 'react-icons/bs'
import { Link } from "react-router-dom";




function Footer() {




        const year = new Date().getFullYear()


    return (

        <footer className="footer">


            <div className="site-footer--container">
                <div className="site-footer--logo">
                    
                    <p>Reach Us at:</p>

                    <a href ='https://github.com/G2F-Connect' className='icons' target="_blank" rel="noopener noreferrer"><BsGithub className='icons-s' /></a>
                    <a href = 'https://twitter.com' className='icons' target="_blank" rel="noopener noreferrer"><BsTwitter  className='icons-s'/></a>



                </div>


                <nav className="site-footer--nav">
                    <div className="site-footer--col">
                        <h5 className="-title">G2F Connect</h5>
                        <ul className="-list">
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="site-footer--col">
                        <h5 className="-title">Product</h5>
                        <ul className="-list">
                            <li>
                                <Link to="/tutorial">Tutorials</Link>
                            </li>
                            <li>
                                <Link to="/terms">Terms of service</Link>
                            </li>
                            <li>
                                <Link to="/privacy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="site-footer--col">
                        <h5 className="-title">Contact</h5>
                        <ul className="-list">
                            <li>
                                <a href="mailto:g2fconnect@gmail.com">Email</a>
                            </li>
                            <li>
                                <a href="/map">Map</a>
                            </li>
                        </ul>
                    </div>
                    <div className="site-footer--col">
                        <h5 className="-title">Services</h5>
                        <ul className="-list">
                            <li>
                                <Link to="/weather">Weather Forecast</Link>
                            </li>

                            <li>
                                <Link to="/credit">Loans & Credit</Link>
                            </li>

                            <li>
                                <Link to="/support">Support</Link>
                            </li>

                            <li>
                                <Link to="/fertilizers">Subsidzed Products</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="site-footer--copyright"><p>Copyright © {year} G2F Connect. All rights reserved.</p></div>


        </footer>
    )
}

export default Footer