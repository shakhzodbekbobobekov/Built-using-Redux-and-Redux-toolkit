import React from "react";

// import img
import homeImg from "../img/home-img.jpg";

function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Be aducated so that</h2>
          </div>
          <div className="hide">
            <h2>you can change</h2>
          </div>
          <div className="hide">
            <h2>the world.</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            debitis vitae quaerat repellat in sunt quisquam, lau
          </p>
          <button>About Us</button>
        </div>
        <div className="image">
          <img src={homeImg} alt="children is playing" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
