import React from "react";
// import style
import styled from "styled-components";

// import img
import homeImg from "../img/home-img.jpg";

function AboutSection() {
  return (
    <About>
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
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit debitis
        </p>
        <button>About Us</button>
      </div>
      <div className="image">
        <img src={homeImg} alt="children is playing" />
      </div>
    </About>
  );
}

//styled components
const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
`;

export default AboutSection;
