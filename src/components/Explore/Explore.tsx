import { ArrowNarrowRight } from "tabler-icons-react";

const Explore = () => {
  return (
    <>
      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <div className="card-content">
              <h2 className="h2 card-title">Looking for a dream home?</h2>

              <p className="card-text">
                We can help you realize your dream of a new home
              </p>
            </div>

            <button className="btn cta-btn">
              <span>Explore Properties</span>

              <ArrowNarrowRight size={26} strokeWidth={1} color={"black"} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
