import {
  Mail,
  MapPin,
  Phone,
  BrandFacebook,
  BrandTwitter,
  BrandLinkedin,
  BrandYoutube,
} from "tabler-icons-react";
import logo from "../../assets/images/logoo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src={logo} alt="betkiray logo" className="footer_logo" />
              </a>

              <p className="section-text">
                Lorem Ipsum is simply dummy text of the and typesetting
                industry. Lorem Ipsum is dummy text of the printing.
              </p>

              <ul className="contact-list">
                <li>
                  <a href="#" className="contact-link">
                    <MapPin size={22} strokeWidth={1} color={"red"} />

                    <address>Brooklyn, New York, United States</address>
                  </a>
                </li>

                <li>
                  <a href="tel:+0123456789" className="contact-link">
                    <Phone size={22} strokeWidth={1} color={"red"} />

                    <span>+251-932-488734</span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:contact@betkiray.com"
                    className="contact-link"
                  >
                    <Mail size={22} strokeWidth={1} color={"red"} />

                    <span>contact@betkiray.com</span>
                  </a>
                </li>
              </ul>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <BrandFacebook size={22} strokeWidth={1} color={"white"} />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <BrandTwitter size={22} strokeWidth={1} color={"white"} />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <BrandLinkedin size={22} strokeWidth={2} color={"white"} />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <BrandYoutube size={22} strokeWidth={1} color={"white"} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-link-box">
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Company</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    All Products
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Locations Map
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Services</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Order tracking
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Wish List
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Login
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    My account
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Promotional Offers
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Customer Care</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Login
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    My account
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Wish List
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Order tracking
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2024 <a href="#">Mekuanint Legese</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
