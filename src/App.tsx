import Benefits from "./components/Benefits";
import Demo from "./components/Demo";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/howitworks/HowItWorks";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Recipes from "./components/recipes/Recipes";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-p font-syne text-secondary-green">
      <Navbar />
      <Hero />
      <Demo />
      <HowItWorks />
      <Benefits />
      <Recipes />
      <Testimonials />
      <Pricing />
    </main>
  );
}

export default App;
