import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2jTtABzLmUB-_M2iqc0MJH4QnFrVb5QFzQ&s"
    },
    {
      title: "Dental Implants",
      description:
        "Restore your smile with dental implants that look and feel natural, providing long-lasting solutions for missing teeth.",
      image:
        "data:image/jpeg;base64,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"
    },
    {
      title: "Orthodontics",
      description:
        "Achieve a perfect smile with our orthodontic treatments, including braces and aligners, tailored to your needs.",
      image:
        "data:image/jpeg;base64,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"
    },
    {
      title: "Root Canal Therapy",
      description:
        "Get relief from tooth pain and preserve your natural tooth with our gentle root canal treatments.",
      image:
        "https://www.shutterstock.com/image-photo/female-dentist-doctor-talks-small-600nw-2330097175.jpg"
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile with cosmetic procedures like veneers, bonding, and contouring, customized to suit your facial features.",
      image:
        "https://img.freepik.com/premium-photo/professional-dentist-doctor-working-woman-dental-clinic-lady-woman-dentist-taking-care-teeth_217236-7311.jpg"
    },
    {
      title: "Preventive Care",
      description: "Enhance your smile with cosmetic procedures like veneers, bonding, and contouring, customized to suit your facial features.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd45kc5cpWpc5lDMHcn3FKfWZV7IO2YxkkCg&s"
    }
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
