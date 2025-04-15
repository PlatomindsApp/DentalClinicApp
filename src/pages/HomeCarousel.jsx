import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Orthodontics from '../assets/Orthodontics.jpg';
import TeethWhitening from '../assets/TeethWhitening.jpg';
import RootcanalTherapy from '../assets/RootcanalTherapy.jpg';
import DentalImplant from '../assets/DentalImplant.jpg';
import CosmeticDentist from '../assets/CosmeticDentist.jpg';
import PreventiveCare from '../assets/CosmeticDentist.jpg';
const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerMode: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: false },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
  };

  const customCards = [
    {
      title: "Teeth Whitening",
      description:
        "Brighten your smile with our professional teeth whitening services, giving you a dazzling, confident smile that lasts.",
      image:TeethWhitening},
    {
      title: "Dental Implants",
      description:
        "Restore your smile with dental implants that look and feel natural, providing long-lasting solutions for missing teeth.",
      image:DentalImplant},
    {
      title: "Orthodontics",
      description:
        "Achieve a perfect smile with our orthodontic treatments, including braces and aligners, tailored to your needs.",
      image:Orthodontics
    },
    {
      title: "Root Canal Therapy",
      description:
        "Get relief from tooth pain and preserve your natural tooth with our gentle root canal treatments.",
      image:RootcanalTherapy},
    {
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile with cosmetic procedures like veneers, bonding, and contouring, customized to suit your facial features.",
      image:CosmeticDentist},
    {
      title: "Preventive Care",
      description: "Enhance your smile with cosmetic procedures like veneers, bonding, and contouring, customized to suit your facial features.",
      image:PreventiveCare}
  ];

  return (
    <div className="text-center">
      {/* Heading */}
      <h1 className="our-services">Our Doctors</h1>
      <h3>Our Best Expert Dentists</h3>

      <div className="custom-carousel-wrapper">
        <Slider {...settings}>
          {customCards.map((currentCard, index) => (
            <div key={index} className="custom-carousel-card">
              <img
                src={currentCard.image}
                alt={currentCard.title}
                className="custom-carousel-image"
              />
              <h6 className="custom-carousel-title">{currentCard.title}</h6>
              <p className="custom-carousel-description">
                {currentCard.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomCarousel;
