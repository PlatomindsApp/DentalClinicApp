/* eslint-disable no-unused-vars */
import React from "react";
import bgImg from "../assets/bgImg.jpg";
import "./Home.css";
import TextSection from "./HomeTextSection";
import AboutTextSection from "./AboutText-section";
import EnquiryForm from "./HomeEnquirySection";
import Testimonials from "./HomeTestimonials";

function HomePage() {
  return (
    <>
      <div className="background-container">
        <img src={bgImg} alt="Background" className="background-img" />

        {/* Overlay Content for Text & Button */}
        <div className="overlay-content">
          <strong className="hero-text">
            We provide the best solutions for dental appointments.
          </strong>

          {/* Contact Us Button */}
          <button className="contact-us-btn">Contact Us</button>
        </div>
      </div>

      {/* Our services section */}
      <TextSection />
      {/* About us section  */}
      <AboutTextSection />
      {/* Enquiry form section  */}
      <EnquiryForm/>
      {/* Testimonials section with cards  */}
      <Testimonials/>
    </>
  );
}

export default HomePage;
