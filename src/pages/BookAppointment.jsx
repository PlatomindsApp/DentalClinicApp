import "./BookAppointment.css";
const inputFields = [
  { type: "text", placeholder: "Full Name" },
  { type: "email", placeholder: "Email" },
  { type: "tel", placeholder: "Contact No." },
  { type: "text", placeholder: "Topic" }
];
const contactInfo = [
  {
    icon: "📍",
    title: "Location",
    text: "Platominds Services Pvt.Ltd, Rajarampuri, Kolhapur, India"
  },
  {
    icon: "⏰",
    title: "Clinic Hours",
    text: (
      <>
        Monday to Friday 09:00 Am to 05.00 Pm.
        <br />
        Saturday 09:00 Am to 12.00 Pm.
      </>
    )
  },
  {
    icon: "📧",
    title: "Connect With Us",
    text: (
      <>
        Platomindservices@Platominds.com
        <br />
        sayali.pawar@Platominds.com
      </>
    )
  }
];

const BookAppointment = () => {
  return (
    <div className="appointment-wrapper">
      {/* Form Section */}
      <div className="form-container">
        <h2 className="form-title">Book An Appointment</h2>
        <div className="form-grid">
          {inputFields.map((field, index) => (
            <input
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              className="input-field"
            />
          ))}
          <textarea
            placeholder="Share Your Concern"
            className="input-field textarea"
          ></textarea>
        </div>
        <button className="submit-btn">Submit</button>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        {contactInfo.map((info, index) => (
          <div className="info-box" key={index}>
            <div className="icon">{info.icon}</div>
            <div>
              <h3 className="info-title">{info.title}</h3>
              <p className="info-text">{info.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BookAppointment;
