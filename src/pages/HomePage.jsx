/* eslint-disable no-unused-vars */
import React from "react";
import bgImg from "../assets/bgImg.jpg";
import "./Home.css";
function HomePage() {
  return (
    <div className="background-img">
      <img src={bgImg} alt="Background" className="background-img" />
      <span>We are best solutions for dental Appointment.</span>
    </div>
  );
}
export default HomePage;
