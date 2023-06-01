import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <article>
          <Hero />
        </article>
      </main>
    </>
  );
}

export default App;
