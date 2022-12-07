import React from "react";
// import style
import styled from "styled-components";

// import img
import homeImg from "../img/home-img.jpg";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Be aducated so that</h2>
          </Hide>
          <Hide>
            <h2>you can change</h2>
          </Hide>
          <Hide>
            <h2>the world.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit debitis
        </p>
        <button>About Us</button>
      </Description>
      <Image>
        <img src={homeImg} alt="children is playing" />
      </Image>
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

const Description = styled.div`
  flex: 1;
  padding-right: 0.5rem;
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
