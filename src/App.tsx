import Demo from "./components/Demo";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="text-p font-syne text-secondary-green">
      <Navbar />
      <Hero />
      <Demo />
    </main>
  );
}

export default App;
