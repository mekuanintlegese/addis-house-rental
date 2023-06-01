import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <article>
          <Hero />
          <About />
        </article>
      </main>
    </>
  );
}

export default App;
