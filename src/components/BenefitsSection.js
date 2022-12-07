import React from "react";
//import img
import benefitImg from "../img/benefit-img.jpg";

function BenefitsSection() {
  return (
    <div className="benefits">
      <div className="description">
        <h2>High quality learing system</h2>
        <div className="benefit">
          <h3> Online platform</h3>
          <h3>High experienced and talented mentor</h3>
          <h3>Fast learing system</h3>
          <h3>Offilen school for children</h3>
        </div>
      </div>
      <img src={benefitImg} alt="benefits img " />
    </div>
  );
}

export default BenefitsSection;
