import BookAppointment from "./BookAppointment";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-section">
      <div className="contact-image-wrapper">
        <img
          className="contact-background-img"
          src="https://www.shutterstock.com/image-photo/dental-care-smiling-woman-showing-260nw-788843587.jpg"
          alt="Contact-Us"
        />
        <div className="form-overlay">
          <BookAppointment />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
