import {
  Mail,
  MapPin,
  Search,
  ShoppingCart,
  MoodSmile,
} from "tabler-icons-react";
import logo from "../../assets/images/logoo.png";
const Navbar = () => {
  return (
    <>
      <header className="header" data-header>
        <div className="overlay" data-overlay></div>

        <div className="header-top">
          <div className="container">
            <ul className="header-top-list">
              <li>
                <a href="mailto:info@betkiray.com" className="header-top-link">
                  <Mail size={22} strokeWidth={1} color={"red"} />
                  <span>info@betkiray.com</span>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-link">
                  <MapPin size={22} strokeWidth={1} color={"red"} />
                  <address>Bole, Addis Ababa, Ethiopia</address>
                </a>
              </li>
            </ul>

            <div className="wrapper">
              <ul className="header-top-social-list">
                <li>
                  <a href="#" className="header-top-social-link"></a>
                </li>

                <li>
                  <a href="#" className="header-top-social-link"></a>
                </li>

                <li>
                  <a href="#" className="header-top-social-link"></a>
                </li>

                <li>
                  <a href="#" className="header-top-social-link"></a>
                </li>
              </ul>

              <button className="header-top-btn">Add Listing</button>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <a href="#" className="logo">
              <img src={logo} alt="betkiray logo" height="50px" />
            </a>

            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <a href="#" className="logo">
                  <img src={logo} alt="betkiray logo" height="50px" />
                </a>

                <button
                  className="nav-close-btn"
                  data-nav-close-btn
                  aria-label="Close Menu"
                ></button>
              </div>

              <div className="navbar-bottom">
                <ul className="navbar-list">
                  <li>
                    <a href="#home" className="navbar-link" data-nav-link>
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="#about" className="navbar-link" data-nav-link>
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#service" className="navbar-link" data-nav-link>
                      Service
                    </a>
                  </li>

                  <li>
                    <a href="#property" className="navbar-link" data-nav-link>
                      Property
                    </a>
                  </li>

                  <li>
                    <a href="#blog" className="navbar-link" data-nav-link>
                      Blog
                    </a>
                  </li>

                  <li>
                    <a href="#contact" className="navbar-link" data-nav-link>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="header-bottom-actions">
              <button className="header-bottom-actions-btn" aria-label="Search">
                <Search size={22} strokeWidth={1} color={"black"} />
                <span>Search</span>
              </button>

              <button
                className="header-bottom-actions-btn"
                aria-label="Profile"
              >
                <MoodSmile size={26} strokeWidth={1} color={"black"} />

                <span>Profile</span>
              </button>

              <button className="header-bottom-actions-btn" aria-label="Cart">
                <ShoppingCart size={26} strokeWidth={1} color={"black"} />
                <span>Cart</span>
              </button>

              <button
                className="header-bottom-actions-btn"
                data-nav-open-btn
                aria-label="Open Menu"
              >
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
