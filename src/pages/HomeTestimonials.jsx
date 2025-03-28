import dentistFourth from '../assets/dentistOne.jpg';
const slides = [
  { id: 1, img: "1041", credit: "Tim Marshall" },
  { id: 2, img: "1043", credit: "Christian Joudrey" },
  { id: 3, img: "1044", credit: "Steve Carter" },
  { id: 4, img: "1045", credit: "Aleksandra Boguslawska" },
  { id: 5, img: "1049", credit: "Rosan Harmens" },
  { id: 6, img: "1052", credit: "Annie Spratt" },
];
const Testimonials = () => {
  return (
    <>
    <section>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {slides.map((slide, index) => (
            <input
              key={slide.id}
              type="radio"
              name="carousel-slides"
              id={`carousel-slide-${slide.id}`}
              defaultChecked={index === 0}
            />
          ))}

          <ul className="carousel-slides-list">
            {slides.map((slide) => (
              <li className="carousel-slide-item" key={slide.id}>
                <figure>
                  <div>
                    <img
                      src={dentistFourth}
                      alt="Slide image"
                    />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="carousel-credit">Photo: {slide.credit}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <ul className="carousel-thumbnails-list">
            {slides.map((slide) => (
              <li key={slide.id}>
                <label htmlFor={`carousel-slide-${slide.id}`}>
                  <img
                    src={`https://picsum.photos/id/${slide.img}/150/150`}
                    alt="Thumbnail"
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </>
  );
};
export default Testimonials;
