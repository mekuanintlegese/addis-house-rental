import { MoodSmile, Tag, CalendarEvent } from "tabler-icons-react";
import blogImage1 from "../../assets/images/blog-1.png";
import blogImage2 from "../../assets/images/blog-2.jpg";
import blogImage3 from "../../assets/images/blog-3.jpg";
const Blogs = () => {
  return (
    <>
      <section className="blog" id="blog">
        <div className="container">
          <p className="section-subtitle">News & Blogs</p>

          <h2 className="h2 section-title">Latest News Feeds</h2>

          <ul className="blog-list has-scrollbar">
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <img
                    src={blogImage1}
                    alt="Top Most Inspiring Interior Design Of 2023"
                    className="w-100"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-content-top">
                    <ul className="card-meta-list">
                      <li>
                        <a href="#" className="card-meta-link">
                          <MoodSmile size={22} strokeWidth={1} color={"grey"} />

                          <span>By: Admin</span>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="card-meta-link">
                          <Tag size={22} strokeWidth={1} color={"grey"} />

                          <span>Interior</span>
                        </a>
                      </li>
                    </ul>

                    <h3 className="h3 blog-title">
                      <a href="#">The Most Inspiring Interior Design Of 2023</a>
                    </h3>
                  </div>

                  <div className="blog-content-bottom">
                    <div className="publish-date">
                      <CalendarEvent size={22} strokeWidth={1} color={"grey"} />

                      <time>June 7, 2023</time>
                    </div>

                    <a href="#" className="read-more-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <img
                    src={blogImage2}
                    alt="Recent Commercial Real Estate Transactions"
                    className="w-100"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-content-top">
                    <ul className="card-meta-list">
                      <li>
                        <a href="#" className="card-meta-link">
                          <MoodSmile size={22} strokeWidth={1} color={"grey"} />

                          <span>By: Admin</span>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="card-meta-link">
                          <Tag size={22} strokeWidth={1} color={"grey"} />

                          <span>Estate</span>
                        </a>
                      </li>
                    </ul>

                    <h3 className="h3 blog-title">
                      <a href="#">Recent Commercial Real Estate Transactions</a>
                    </h3>
                  </div>

                  <div className="blog-content-bottom">
                    <div className="publish-date">
                      <CalendarEvent size={22} strokeWidth={1} color={"grey"} />

                      <time>June 7, 2023</time>
                    </div>

                    <a href="#" className="read-more-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <img
                    src={blogImage3}
                    alt="Renovating a Living Room? Experts Share Their Secrets"
                    className="w-100"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-content-top">
                    <ul className="card-meta-list">
                      <li>
                        <a href="#" className="card-meta-link">
                          <MoodSmile size={22} strokeWidth={1} color={"grey"} />

                          <span>By: Admin</span>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="card-meta-link">
                          <Tag size={22} strokeWidth={1} color={"grey"} />

                          <span>Room</span>
                        </a>
                      </li>
                    </ul>

                    <h3 className="h3 blog-title">
                      <a href="#">
                        Renovating the Living Room? Experts Share Their Secrets
                      </a>
                    </h3>
                  </div>

                  <div className="blog-content-bottom">
                    <div className="publish-date">
                      <CalendarEvent size={22} strokeWidth={1} color={"grey"} />

                      <time>June 7, 2023</time>
                    </div>

                    <a href="#" className="read-more-btn">
                      Read More
                    </a>
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

export default Blogs;
