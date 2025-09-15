import Benefits from "./components/Benefits";
import Demo from "./components/Demo";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/howitworks/HowItWorks";
import Navbar from "./components/Navbar";
import Recipes from "./components/recipes/Recipes";

function App() {
  return (
    <main className="text-p font-syne text-secondary-green">
      <Navbar />
      <Hero />
      <Demo />
      <HowItWorks />
      <Benefits />
      <Recipes />
    </main>
  );
}

export default App;
