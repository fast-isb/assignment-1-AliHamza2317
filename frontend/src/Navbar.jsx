import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';
const Navbar=()=>
{
    return(
        <>
        {/* <nav className="main-nav">
          <div className="logo">
            <h2><span>F</span>ashion</h2>
          </div>
          <div className="menu-link">
            <ul>
              <li><NavLink className="nav-link" to="/add">AddSeller</NavLink></li>
            <li>
          <NavLink className="nav-link" to="/view">ViewSeller</NavLink>
        </li>
       </ul>
          </div>
        </nav> */}
        <div className="container-fluid nav-bg">
        
            <div className="row">
                <div className="col-10 mx-auto">

        
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><h2><span>F</span>ashion</h2></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/add">AddSeller</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/view">ViewSeller</NavLink>
        </li>
       </ul>
     
    </div>
  </div>
</nav>
{/* <section className="hero-section">
        <p>Welcome to</p>
        <h1>Fashion</h1>
    </section> */}
  </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;