import { Glass, Home, ShieldCheck, Leaf } from "tabler-icons-react";
import Img1 from "../../assets/images/about-banner-1.png";
import Img2 from "../../assets/images/about-banner-2.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <figure className="about-banner">
            <img src={Img1} alt="House interior" />
            <img src={Img2} alt="House interior" className="abs-img" />
          </figure>

          <div className="about-content">
            <p className="section-subtitle">About Us</p>

            <h2 className="h2 section-title">
              The Leading Real Estate Rental Marketplace in Addis Ababa,
              Ethiopia
            </h2>

            <p className="about-text">
              We are the leading real estate rental marketplace in Addis Ababa,
              Ethiopia. We offer a wide variety of properties to rent, including
              apartments, houses, villas, and commercial spaces. We also offer a
              variety of services to help you find the perfect property,
              including property search, property management, and property
              valuation.
            </p>

            <ul className="about-list">
              <li className="about-item">
                <div className="about-item-icon">
                  <Home size={26} strokeWidth={1} color={"red"} />
                </div>

                <p className="about-item-text">Smart Home Design</p>
              </li>

              <li className="about-item">
                <div className="about-item-icon">
                  <Leaf size={26} strokeWidth={1} color={"red"} />
                </div>

                <p className="about-item-text">Beautiful Scene Around</p>
              </li>

              <li className="about-item">
                <div className="about-item-icon">
                  <Glass size={26} strokeWidth={1} color={"red"} />
                </div>

                <p className="about-item-text">Exceptional Lifestyle</p>
              </li>

              <li className="about-item">
                <div className="about-item-icon">
                  <ShieldCheck size={26} strokeWidth={1} color={"red"} />
                </div>

                <p className="about-item-text">Complete 24/7 Security</p>
              </li>
            </ul>
            <p className="callout">
              We are committed to providing our customers with the best possible
              experience. We offer a wide variety of properties to choose from,
              and we are always adding new properties to our inventory. We also
              offer a variety of services to help you find the perfect property,
              and we are always available to answer your questions.
            </p>

            <a href="#service" className="btn">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
