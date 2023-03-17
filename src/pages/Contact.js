import React from "react";
import Csharp from "../Compontent/Csharp";
import Javascript from "../Compontent/javascript";
import WithLabelExample from "../Compontent/Progres";
import React1 from "../Compontent/react";

const Contact = () => {
  return (
    <div className="About">
      <div className="aboutme">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="images"
          className="imageabout"
        />
        <div className="aboutme1">
          <p className="color"><strong>Name:</strong> Granit Hashani</p>
          <p className="color"><strong>Profile:</strong> Full Stack Developer</p>
          <p className="color"><strong>Email:</strong> Granit-Hashani@outlook.com</p>
          <p className="color"><strong>Phone:</strong> 044-818-128</p>
        <button className="btnmail"><a href = "mailto: granit-hashani@outlook.com" className="btnmail">Send Email</a></button>

        </div>
      </div>
      <div className="test">
        <div className="skills1">
          <h1>Skills</h1>
          <strong >HTML</strong>
          <WithLabelExample  />
          <strong>CSS</strong>
          <WithLabelExample />
          <strong>SASS</strong>
          <WithLabelExample />
          <strong>SCSS</strong>
          <WithLabelExample />
      </div>
      <div className="skills2">
        <h1 className="nonedisplay">Skills</h1>
        <strong>REACT.JS</strong>
          <React1 />
          <strong>BOOTSTRAP</strong>      
          <WithLabelExample />
          <strong>JS</strong>
          <Javascript />
          <strong>C#</strong>
          <Csharp />
      </div>
    </div>
    </div>
  );
};

export default Contact;
