/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import TextSection from "./HomeTextSection";
import AboutTextSection from "./AboutText-section";
import EnquiryForm from "./HomeEnquirySection";
import Testimonials from "./HomeTestimonials";
import PlanCards from "./HomePlanCards";
import FAQ from "./FaQs";
import CustomCarousel from "./HomeCarousel";
import HomebgImg from '../assets/HomebgImg.jpg';
function HomePage() {
  return (
    <>
      <div className="background-container">
        <img
          src={HomebgImg}
          alt="Background"
          className="background-img"
        />

        {/* Overlay Content for Text & Button */}
        <div className="overlay-content">
          <strong className="hero-text">
            Effortless Dental Appointments, Exceptional Care
          </strong>

          {/* Contact Us Button */}
          <button className="contact-us-btn">Contact Us</button>
        </div>
      </div>

      {/* Modern Solutions for a Healthier Smile section */}
      <TextSection />
      {/* About us section  */}
      <AboutTextSection />
      {/* Enquiry form section  */}
      <EnquiryForm />
      {/* Testimonials section with cards  */}
      <Testimonials />
      {/* Plan cards  */}
      <PlanCards />
      {/* FAQ */}
      <FAQ />
      {/* CustomCarousel  */}
      <CustomCarousel />
    </>
  );
}

export default HomePage;
