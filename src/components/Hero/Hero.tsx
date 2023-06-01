import { Home } from "tabler-icons-react";
import bgImage from "../../assets/images/hero-banner.png";
const Hero = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">
              <Home size={26} strokeWidth={1} color={"black"} />

              <span>Real Estate Agency</span>
            </p>

            <h2 className="h1 hero-title">Find Your Dream House By Us</h2>

            <p className="hero-text">
              Looking for your dream home in Addis Ababa? We can help! Our team
              of experienced real estate agents has access to a wide variety of
              properties, so we're sure to find the perfect one for you. We'll
              work with you to understand your needs and budget, and we'll
              negotiate on your behalf to get you the best possible deal.
              Contact us today to get started!
            </p>

            <button className="btn">Make An Enquiry</button>
          </div>

          <figure className="hero-banner">
            <img src={bgImage} alt="Modern house model" className="w-100" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Hero;
