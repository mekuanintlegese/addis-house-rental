import {
  MapPin,
  Camera,
  Movie,
  Bed,
  Man,
  Square,
  ArrowsMaximize,
  CirclePlus,
  Heart,
} from "tabler-icons-react";
import img1 from "../../assets/images/property-1.jpg";
import img2 from "../../assets/images/property-2.jpg";
import img3 from "../../assets/images/property-3.jpg";
import img4 from "../../assets/images/property-4.png";
import autor from "../../assets/images/author.jpg";

const Listing = () => {
  return (
    <>
      <section className="property" id="property">
        <div className="container">
          <p className="section-subtitle">Properties</p>

          <h2 className="h2 section-title">Featured Listings</h2>

          <ul className="property-list has-scrollbar">
            <li>
              <div className="property-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={img1}
                      alt="New Apartment Nice View"
                      className="w-100"
                    />
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <MapPin size={18} strokeWidth={1} color={"white"} />

                      <address>Bole Matemiya, Addis Ababa</address>
                    </button>

                    <button className="banner-actions-btn">
                      <Camera size={18} strokeWidth={1} color={"white"} />

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <Movie size={18} strokeWidth={1} color={"white"} />

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>30,500 ETB</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">New Apartment Nice View</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Addis Abab. Newly
                    Renovated With New Concept.
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <strong>3</strong>

                      <Bed size={26} strokeWidth={1} color={"black"} />

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <Man size={26} strokeWidth={1} color={"black"} />

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <Square size={26} strokeWidth={1} color={"black"} />

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src={autor}
                        alt="Mekuanint Legese"
                        className="w-100"
                      />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Mekuanint Legese</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div>
                  </div>

                  <div className="card-footer-actions">
                    <button className="card-footer-actions-btn">
                      <ArrowsMaximize
                        size={26}
                        strokeWidth={1}
                        color={"black"}
                      />
                    </button>

                    <button className="card-footer-actions-btn">
                      <Heart size={26} strokeWidth={1} color={"black"} />
                    </button>

                    <button className="card-footer-actions-btn">
                      <CirclePlus size={26} strokeWidth={1} color={"black"} />
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="property-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src={img2} alt="Modern Apartments" className="w-100" />
                  </a>

                  <div className="card-badge orange">For Sales</div>

                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <MapPin size={18} strokeWidth={1} color={"white"} />

                      <address>Bole Matemiya, Addis Ababa</address>
                    </button>

                    <button className="banner-actions-btn">
                      <Camera size={18} strokeWidth={1} color={"white"} />

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <Movie size={18} strokeWidth={1} color={"white"} />

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>30,500 ETB</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Modern Apartments</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Addis Abab. Newly
                    Renovated With New Concept.
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <strong>3</strong>

                      <Bed size={26} strokeWidth={1} color={"black"} />

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <Man size={26} strokeWidth={1} color={"black"} />

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <Square size={26} strokeWidth={1} color={"black"} />

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src={autor}
                        alt="Mekuanint Legese"
                        className="w-100"
                      />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Mekuanint Legese</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div>
                  </div>

                  <div className="card-footer-actions">
                    <button className="card-footer-actions-btn">
                      <ArrowsMaximize
                        size={26}
                        strokeWidth={1}
                        color={"black"}
                      />
                    </button>

                    <button className="card-footer-actions-btn">
                      <Heart size={26} strokeWidth={1} color={"black"} />
                    </button>

                    <button className="card-footer-actions-btn">
                      <CirclePlus size={26} strokeWidth={1} color={"black"} />
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="property-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={img3}
                      alt="Comfortable Apartment"
                      className="w-100"
                    />
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <MapPin size={18} strokeWidth={1} color={"white"} />

                      <address>Bole Matemiya, Addis Ababa</address>
                    </button>

                    <button className="banner-actions-btn">
                      <Camera size={18} strokeWidth={1} color={"white"} />

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <Movie size={18} strokeWidth={1} color={"white"} />

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>30,500 ETB</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Comfortable Apartment</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Addis Abab. Newly
                    Renovated With New Concept.
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <strong>3</strong>

                      <Bed size={26} strokeWidth={1} color={"black"} />

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <Man size={26} strokeWidth={1} color={"black"} />

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <Square size={26} strokeWidth={1} color={"black"} />

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src={autor}
                        alt="Mekuanint Legese"
                        className="w-100"
                      />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Mekuanint Legese</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div>
                  </div>

                  <div className="card-footer-actions">
                    <button className="card-footer-actions-btn">
                      <ArrowsMaximize
                        size={26}
                        strokeWidth={1}
                        color={"black"}
                      />
                    </button>

                    <button className="card-footer-actions-btn">
                      <Heart size={26} strokeWidth={1} color={"black"} />
                    </button>

                    <button className="card-footer-actions-btn">
                      <CirclePlus size={26} strokeWidth={1} color={"black"} />
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="property-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={img4}
                      alt="Luxury villa in Rego Park"
                      className="w-100"
                    />
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <MapPin size={18} strokeWidth={1} color={"white"} />

                      <address>Bole Matemiya, Addis Ababa</address>
                    </button>

                    <button className="banner-actions-btn">
                      <Camera size={18} strokeWidth={1} color={"white"} />

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <Movie size={18} strokeWidth={1} color={"white"} />

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>30,500 ETB</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Luxury villa in Rego Park</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Addis Abab. Newly
                    Renovated With New Concept.
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <strong>3</strong>

                      <Bed size={26} strokeWidth={1} color={"black"} />

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <Man size={26} strokeWidth={1} color={"black"} />

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <Square size={26} strokeWidth={1} color={"black"} />

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src={autor}
                        alt="Mekuanint Legese"
                        className="w-100"
                      />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Mekuanint Legese</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div>
                  </div>

                  <div className="card-footer-actions">
                    <button className="card-footer-actions-btn">
                      <ArrowsMaximize
                        size={26}
                        strokeWidth={1}
                        color={"black"}
                      />
                    </button>

                    <button className="card-footer-actions-btn">
                      <Heart size={26} strokeWidth={1} color={"black"} />
                    </button>

                    <button className="card-footer-actions-btn">
                      <CirclePlus size={26} strokeWidth={1} color={"black"} />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Listing;
