import React from "react";
import NavLinks from "../../components/NavLink"
import About from "../About"
import "./style.css";


function Home() {
  return (
    <>
      <div className="heroImage">
          <div className="heroText">
            <p id="name">Hi, I'm David</p>
            <NavLinks to='/about' name='About Me' />
          </div>
      </div>
      <About />
      <div className="portfolioLink">
        <NavLinks to='/portfolio' name='See my portfolio' />
      </div>
      <div className="servicesLink">
        <NavLinks to='/services' name='Services Offered' />
      </div>
    </>
  )
}

export default Home;