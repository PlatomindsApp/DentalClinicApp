import HomeDentalScheduling from '../assets/HomeDentalScheduling.jpg';

const AboutTextSection = () => {
  return (
    <>
      <section className="image-text-section">
        {/* Image */}
        <div className="image-container">
          <img
            src={HomeDentalScheduling}
            alt="Dental Care"
          />
        </div>

        {/* Text Description */}
        <div className="text-container">
          <h2>
            Say Hello to Stress-Free Dental Scheduling About Your Dental Health
          </h2>
          <p>
            Our team of experienced professionals is committed to providing
            high-quality dental care with advanced technology and personalized
            treatment.
          </p>
          <button className="contact-us-btn">Discover More</button>
        </div>
      </section>
    </>
  );
};
export default AboutTextSection;
