import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import "./App.css";
import Services from "./components/Services/Services";
import Listing from "./components/Listing/Listing";
import Blogs from "./components/Blogs/Blogs";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <article>
          <Hero />
          <About />
          <Services />
          <Listing />
          <Blogs />
          <Explore />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
