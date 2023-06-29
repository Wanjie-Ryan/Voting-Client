import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaSeedling } from "react-icons/fa";
import { GiCash, GiLifeSupport } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";

// import { useSelector } from "react-redux";

function Navbar() {
  const [shownav, setshownav] = useState(false);

  const [service, setservice] = useState(false);



  

  const showservice = () => {
    setservice(true);
    // clearTimeout()
  };

  const hideservice = () => {
    setTimeout(() => {
      setservice(false);
    }, 10000);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="main-navbar">
          <Link to="/">
            <div className="navbar--logo">
              <div className="img-logo">

                <h2>Sisi Voters</h2>
              </div>

              <div className="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <Link to="/">
                      {" "}
                      <p>Vote</p>
                    </Link>
                  </div>

                  <div class="flip-box-back">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <p>
                        Bridging the gap between Farmers and The Government.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="navbar--details">
            <div className="flex-direction-left">
              <p>
                <Link to="/contact" className="navigations">
                  Contact
                </Link>
              </p>
              <p>
                <Link to="/about" className="navigations">
                  About
                </Link>
              </p>

              {/* <p>
                <Link
                  className="navigations"
                  onMouseOver={showservice}
                  onMouseOut={hideservice}>
                  Services
                </Link>

                <div
                  className="show-nav"
                  style={{ display: service ? "block" : "none" }}>
                  <Link to="/weather">
                    <p className="navigations-show">
                      {" "}
                      <TiWeatherPartlySunny className="seedling-icon" /> Weather
                      Forecast
                    </p>
                  </Link>
                  <hr></hr>
                  <Link to="/credit">
                    <p className="navigations-show">
                      {" "}
                      <GiCash className="seedling-icon" /> Loans & credits
                    </p>
                  </Link>
                  <hr></hr>
                  <Link to="/support">
                    <p className="navigations-show">
                      {" "}
                      <GiLifeSupport className="seedling-icon" />
                      Agri-Expert-Support
                    </p>
                  </Link>
                  <hr></hr>
                  <Link to="/fertilizers">
                    <p className="navigations-show">
                      {" "}
                      <FaSeedling className="seedling-icon" /> Subsidized
                      Products
                    </p>
                  </Link>
                </div>
              </p> */}

              {/* <div className="show">

                          <p>Weather Forecast</p>
                          <p>Loans & credits</p>
                          <p>Support</p>
                          <p>Subsidized Products</p>



                        </div> */}
            </div>

            
              {/* <div className="signup-button">
                <Link to="/register">
                  <button className="signup-button--button">Sign Up</button>
                </Link>

                <BiMenu className="menu" onClick={() => setshownav(!shownav)} />
              </div> */}
            
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}

      {shownav && (
        <>
          <aside>
            <div
              className="backdrop"
              onClick={() => setshownav(!shownav)}></div>

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
                <div className="main-logo">
                  <Link to="/">
                    <p>Sisi Voters</p>
                  </Link>
                </div>

                <div className="flip-box">
                  <div class="flip-box-inner">
                    <div class="flip-box-front">
                      <Link to="/">
                        {" "}
                        <p>Vote</p>
                      </Link>
                    </div>

                    <div class="flip-box-back">
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <p>
                          Bridging the gap between Farmers and The Government.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="navigation">
                <h2 className="nav-side">Navigation</h2>

                <div className="navs">
                  <div className="side-contact">
                    <FaSeedling className="seedling-icon" />

                    <p>
                      <Link to="/contact" className="navigations">
                        Contact
                      </Link>
                    </p>
                  </div>

                  <hr></hr>

                  <div className="side-contact">
                    <FaSeedling className="seedling-icon" />

                    <p>
                      <Link to="/about" className="navigations">
                        About
                      </Link>
                    </p>
                  </div>

                  <hr></hr>

                  {/* <div className= 'side-contact'>

                          <FaSeedling className="seedling-icon"/>

                          <p >
                            <Link to="/services" className = 'navigations'>Services</Link>
                          </p>

                              
                          </div> */}

                  {/* <hr></hr> */}
                </div>

                {/* <h2 className="nav-side-servies">Services</h2>

                <div className="navs">
                  <div className="side-contact">
                    <FaSeedling className="seedling-icon" />

                    <p>
                      <Link to="/fertilizers" className="navigations">
                        Subsidized Products
                      </Link>
                    </p>
                  </div>

                  <hr></hr>

                  <div className="side-contact">
                    <GiCash className="seedling-icon" />

                    <p>
                      <Link to="/credit" className="navigations">
                        Loans and Credits
                      </Link>
                    </p>
                  </div>

                  <hr></hr>

                  <div className="side-contact">
                    <TiWeatherPartlySunny className="seedling-icon" />

                    <p>
                      <Link to="/weather" className="navigations">
                        Weather Forecast
                      </Link>
                    </p>
                  </div>

                  <hr></hr>

                  <div className="side-contact">
                    <GiLifeSupport className="seedling-icon" />

                    <p>
                      <Link to="/support" className="navigations">
                        Agri-Expert-Support
                      </Link>
                    </p>
                  </div>

                  <hr></hr>
                </div> */}

                <h4 className="join">Let's Vote Today!!</h4>

               
                  <div className="btns-side">
                    <Link to="/register">
                      <button className="signup-button--button-side">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}

export default Navbar;
