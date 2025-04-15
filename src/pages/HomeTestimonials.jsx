/* eslint-disable react/prop-types */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeTestimonial from '../assets/HomeTestimonial.jpg';
import HometestimonialImg from '../assets/HometestimonialImg.jpg';
import HomeTestimony from '../assets/HomeTestimony.jpg';

const testimonials = [
  {
    img:HomeTestimonial,
    name: "Eleanor Crisp",
    role: "About Dr.Eleanor Crisp",
    quote: "Exceptional care and expertise! The dentists here are truly professionals who ensure a comfortable and pain-free experience. Highly recommended!",
  },
  {
    img: HometestimonialImg,
    name: "Gordon Norman",
    role: "About Dr.Gordon Norman",
    quote: "From consultation to treatment, the process was seamless. The team is highly skilled, and their attention to detail is unmatched.",
  },
  {
    img: HomeTestimony,
    name: "Sue Shei",
    role: "About Dr.Sue Shei",
    quote:  "From consultation to treatment, the process was seamless. The team is highly skilled, and their attention to detail is unmatched.",
  },
];

const ProfileCard = ({ img, name, role, quote }) => {
  return (
    <div className="profile-card">
      <img src={img} alt={name} className="profile-img" />
      <figcaption>
        <h2>{name}</h2>
        <h4 className="dentist-description">{role}</h4>
        <blockquote className="dentist-description">{quote}</blockquote>
      </figcaption>
    </div>
  );
};

const ProfileList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="profile-list">
      {/* Heading */}
      <div className="text-center">
        <h1 className="our-services">Testimonial</h1>
        <h3 className="testimony">Hear from our happy patients.</h3>
      </div>

      {/* Carousel */}
      <Slider {...settings} className="profiles-carousel">
        {testimonials.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </Slider>
    </section>
  );
};

export default ProfileList;
