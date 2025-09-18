import AskedQuestions from "./components/AskedQuestions";
import Benefits from "./components/Benefits";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import HealthyInsights from "./components/HealthyInsights";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/how-it-works/HowItWorks";
import Navbar from "./components/navbar/Navbar";
import NeedAssistance from "./components/NeedAssistance";
import Pricing from "./components/Pricing";
import Recipes from "./components/recipes/Recipes";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-p font-work-syne text-secondary-green overflow-x-clip">
      <Navbar />
      <Hero />
      <Demo />
      <HowItWorks />
      <Benefits />
      <Recipes />
      <Testimonials />
      <Pricing />
      <HealthyInsights />
      <AskedQuestions />
      <NeedAssistance />
      <Footer />
    </main>
  );
}

export default App;
