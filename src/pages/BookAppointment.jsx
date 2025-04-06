
import "./BookAppointment.css"; // Importing CSS file

const BookAppointment = () => {
  return (
    <div className="appointment-wrapper">
      {/* Form Section */}
      <div className="form-container">
        <h2 className="form-title">Make Appointment</h2>

        <div className="form-grid">
          <input type="text" placeholder="First Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="tel" placeholder="Phone No." className="input-field" />
          <input type="text" placeholder="Subject" className="input-field" />
          <textarea placeholder="Write comments" className="input-field textarea"></textarea>
        </div>

        <button className="submit-btn">Submit</button>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        {/* Address */}
        <div className="info-box">
          <div className="icon">📍</div>
          <div>
            <h3 className="info-title">Office Address</h3>
            <p className="info-text">380 St Kilda Road, Melbourne VIC 3004, Australia</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="info-box">
          <div className="icon">⏰</div>
          <div>
            <h3 className="info-title">Working Hours</h3>
            <p className="info-text">Monday to Friday 09:00 to 18:30<br />Saturday 15:30</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="info-box">
          <div className="icon">📧</div>
          <div>
            <h3 className="info-title">Message Us</h3>
            <p className="info-text">support@example.com<br />info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
