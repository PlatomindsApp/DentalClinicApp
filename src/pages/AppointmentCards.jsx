
import "./AppointmentCards.css";
const cardData = [
  {
    id: 1,
    date: "24th March 2021",
    title: "Cras accumsan nulla nec lacus ultricies placerat.",
    description:
      "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
    image: "https://marinasidedental.com/wp-content/themes/www.marinasidedental.com/marinaside-dental/files/2023/12/cosmetic-dentistry-to-enhance-your-smile-with-aesthetic-dental-procedures.jpg",
  },
  {
    id: 2,
    date: "24th March 2021",
    title: "Dras accumsan nulla nec lacus ultricies placerat.",
    description:
      "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
    image: "https://marinasidedental.com/wp-content/themes/www.marinasidedental.com/marinaside-dental/files/2023/12/cosmetic-dentistry-to-enhance-your-smile-with-aesthetic-dental-procedures.jpg",
  },
  {
    id: 3,
    date: "24th March 2021",
    title: "Seas accumsan nulla nec lacus ultricies placerat.",
    description:
      "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
    image: "https://marinasidedental.com/wp-content/themes/www.marinasidedental.com/marinaside-dental/files/2023/12/cosmetic-dentistry-to-enhance-your-smile-with-aesthetic-dental-procedures.jpg",
  },
];

const AppointmentCards = () => {
  return (
    <div className="text-center">
    {/* Heading */}
    <h1 className="our-services">Our Blog</h1>
    <h3>Our Latest Blog & News</h3>
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
              READ MORE
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AppointmentCards;
