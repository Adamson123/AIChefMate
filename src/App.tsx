import Benefits from "./components/Benefits";
import Demo from "./components/Demo";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="text-p font-syne text-secondary-green">
      <Navbar />
      <Hero />
      <Demo />
      <HowItWorks />
      <Benefits />
    </main>
  );
}

export default App;
