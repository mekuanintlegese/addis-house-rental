import { ArrowNarrowRight } from "tabler-icons-react";

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
                  <img src="./assets/images/service-1.png" alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Buy a home</a>
                </h3>

                <p className="card-text">
                  over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
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
                  <img src="./assets/images/service-2.png" alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Rent a home</a>
                </h3>

                <p className="card-text">
                  over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
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
                  <img src="./assets/images/service-3.png" alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Sell a home</a>
                </h3>

                <p className="card-text">
                  over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
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
