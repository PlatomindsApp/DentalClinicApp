
import './AboutUs.css';
import AboutTextSection from './AboutText-section';
import AppointmentSection from './AppointmentSection';
import CustomCarousel from './HomeCarousel';
import FAQ from './FaQs';
import AppointmentCards from './AppointmentCards';
import AboutImg from '../assets/AboutImg.jpg';
function AboutUs() {
  return (
    <><div className="about-container">
      <img src={AboutImg} alt="About Us" className="about-image" />
      <div className="about-text">
        <h1>About the Clinic</h1>
        <h2>Home | About the Clinic</h2>
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
