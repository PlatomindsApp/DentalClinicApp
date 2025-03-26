import aboutbgImg from '../assets/aboutbgImg.jpg';
import './AboutUs.css';
import aboutImg from '../assets/aboutImg.png';
function AboutUs() {
  return (
    <><div className="about-container">
      <img src={aboutbgImg} alt="About Us" className="about-image" />
      <div className="about-text">
        <h1>About Us</h1>
        <h2>Home | About Us</h2>
      </div>
    </div>
    <section className="image-text-section">
        {/* Image */}
        <div className="image-container">
          <img src={aboutImg} alt="Dental Care" />
        </div>

        {/* Text Description */}
        <div className="text-container">
          <h2>We Care About Your Dental Health</h2>
          <p>
            Our team of experienced professionals is committed to providing
            high-quality dental care with advanced technology and personalized
            treatment.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </section></>
  );
}

export default AboutUs;
