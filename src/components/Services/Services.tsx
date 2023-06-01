import { ArrowNarrowRight } from "tabler-icons-react";
import bgImg1 from "../../assets/images/service-1.png";
import bgImg2 from "../../assets/images/service-2.png";
import bgImg3 from "../../assets/images/service-3.png";

const Services = () => {
  return (
    <>
      <section className="service" id="service">
        <div className="container">
          <p className="section-subtitle">Our Services</p>

          <h2 className="h2 section-title">Our Main Focus</h2>

          <ul className="service-list">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={bgImg1} alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Buy a home</a>
                </h3>

                <p className="card-text">
                  We have over 1 million+ homes for sale available on the
                  website, we can match you with a house you will want to call
                  home.
                </p>

                <a href="#" className="card-link">
                  <span>Find A Home</span>

                  <ArrowNarrowRight size={26} strokeWidth={1} color={"black"} />
                </a>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={bgImg2} alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Rent a home</a>
                </h3>

                <p className="card-text">
                  We have over 1 million+ homes for rent available on the
                  website, we can match you with a house you will want to call
                  home.
                </p>

                <a href="#" className="card-link">
                  <span>Find A Home</span>

                  <ArrowNarrowRight size={26} strokeWidth={1} color={"black"} />
                </a>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={bgImg3} alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Sell a home</a>
                </h3>

                <p className="card-text">
                  We can help you sell your home quickly and for the best
                  possible price. We have a team of experienced real estate
                  agents.
                </p>

                <a href="#" className="card-link">
                  <span>Find A Home</span>

                  <ArrowNarrowRight size={26} strokeWidth={1} color={"black"} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;
