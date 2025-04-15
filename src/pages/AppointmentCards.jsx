import "./AppointmentCards.css";
import BookappImg from '../assets/BookappImg.jpg';
const cardData = [
  {
    id: 1,
    date: "24th March 2025",
    title: "Dr. Anjali Sharma.",
    description:
      "Providing comprehensive dental care with over 10 years of experience in cosmetic and restorative dentistry.",
    image:BookappImg},
  {
    id: 2,
    date: "24th March 2025",
    title: "Dr. Rakesh Patel",
    description:
      "Providing comprehensive dental care with over 10 years of experience in cosmetic and restorative dentistry.",
    image:BookappImg},
  {
    id: 3,
    date: "24th March 2025",
    title: " Dr. Meena Iyer",
    description:
      "Providing comprehensive dental care with over 10 years of experience in cosmetic and restorative dentistry.",
    image: BookappImg},
];

const AppointmentCards = () => {
  return (
    <div className="text-center">
    {/* Heading */}
    <h1 className="our-services">From The Dentist’s Desk</h1>
    <h3>Dental News & Tips</h3>
    <div className="cards-container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt="Dental Checkup" className="card-image" />
          <div className="date-badge">
            📅 {card.date}
          </div>
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href="#" className="read-more">
              DISCOVER MORE
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AppointmentCards;
