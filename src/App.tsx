import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import "./App.css";
import Services from "./components/Services/Services";
import Listing from "./components/Listing/Listing";

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
        </article>
      </main>
    </>
  );
}

export default App;
