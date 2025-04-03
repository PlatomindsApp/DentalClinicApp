import aboutbgImg from '../assets/aboutbgImg.jpg';
import './AboutUs.css';
import AboutTextSection from './AboutText-section';
import AppointmentSection from './AppointmentSection';
import CustomCarousel from './HomeCarousel';
import FAQ from './FaQs';
import AppointmentCards from './AppointmentCards';
function AboutUs() {
  return (
    <><div className="about-container">
      <img src={aboutbgImg} alt="About Us" className="about-image" />
      <div className="about-text">
        <h1>About Us</h1>
        <h2>Home | About Us</h2>
      </div>
    </div>
    <AboutTextSection/>
    <AppointmentSection/>
    <CustomCarousel/>
    <FAQ/>
    <AppointmentCards/>
</>
  );
}

export default AboutUs;
