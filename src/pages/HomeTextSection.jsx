import toothImg from "../assets/toothImg.png";

const services = [
  {
    title: "Root Canal",
    description: "Save your natural tooth with painless root canal treatment."
  },
  {
    title: "Alignment Teeth",
    description: "Enhance your smile with advanced orthodontic solutions."
  },
  {
    title: "Tooth Extraction",
    description: "Safe and gentle extractions to relieve pain and discomfort."
  },
  {
    title: "Oral Hygiene",
    description: "Maintain a healthy mouth with expert dental care tips."
  },
  {
    title: "Oral Hygiene",
    description: "Maintain a healthy mouth with expert dental care tips."
  },
  {
    title: "Live Advisory",
    description: "Get instant dental advice from our experienced professionals."
  },
  {
    title: "Cavity Inspection",
    description: "Early detection and treatment to prevent further tooth decay."
  },
  {
    title: "Oral Hygiene",
    description: "Maintain a healthy mouth with expert dental care tips."
  }
];

const TextSection = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="our-services">Our Services</h1>
        <h3>What we provide</h3>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}

        {/* Center Image */}
        <div className="image-container">
          <img src={toothImg} alt="Dental Equipment" className="grid-image" />
        </div>
      </div>
    </>
  );
};

export default TextSection;
