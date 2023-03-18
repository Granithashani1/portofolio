import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaUserAlt } from 'react-icons/fa';





const Home = () => {
  return (
    <div className="homepage">
      <div className="icon">
        <FaFacebook className="icon1"/>
        <FaInstagram className="icon1"/>
        <FaLinkedin className="icon1"/>  
        <FaUserAlt className="icon1"/>
        <FaGithub className="icon1"/>
      </div>
      <div className="shortbio">
        <h1>  I'm Granit Hashani</h1>
        <p>I'm a Web Developer with extensive experience for over 2 years. </p>
        <button className="btncv">Download Cv</button>
        <button className="btnmail"><a href = "mailto: granit-hashani@outlook.com" className="btnmail">Send Email</a></button>

      </div>
      <div className="homeimg">
        <img
          src="https://media0.giphy.com/media/l5JbspfwZ0yjHjlJ0K/giphy.gif"
          alt="Images"
          className="earth"
          id="granit"
        />
      </div>
    </div>
  );
};

export default Home;
