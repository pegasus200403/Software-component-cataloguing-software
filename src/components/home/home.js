import React, { useEffect } from "react";
import Header from "../header/header";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Add animation classes after component mounts
    const title = document.querySelector('.title');
    const desc = document.querySelector('.desc');
    const btn = document.querySelector('.btn');
    const link = document.querySelector('.link');
    
    setTimeout(() => {
      title.classList.add('animate');
    }, 300);
    
    setTimeout(() => {
      desc.classList.add('animate');
    }, 800);
    
    setTimeout(() => {
      btn.classList.add('animate');
    }, 1200);
    
    setTimeout(() => {
      link.classList.add('animate');
    }, 1500);
  }, []);

  return (
    <div className="home-container">
      {/* <Header/> */}
      
      <div className="particles"></div>
      
      <div className="body">
        <div className="content-wrapper">
          <h1 className="title">
            Software Component <br />
            <span className="highlight">Cataloguing Software</span>
          </h1>
          
          <div className="separator"></div>
          
          <p className="desc">
            The Software Component Cataloging Software addresses the challenge of efficiently managing and retrieving reusable software components. Built with features such as user authentication, hierarchical categorization, and real-time database updates using ReactJS and Firebase, it streamlines the cataloging process, enabling users to store, search, and reuse components with ease in diverse software development environments.
          </p>
          
          <div className="cta-container">
            <Link to="/login" className="btn">
              <span className="btn-text">Get Started</span>
              <span className="btn-icon">→</span>
            </Link>
            
            <Link to="/register" className="link">
              New user? Register here
            </Link>
          </div>
        </div>
        
        <div className="decoration">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;