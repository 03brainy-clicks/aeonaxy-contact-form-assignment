import ExplainSection from "./components/layout/ExplainSection";
import Footer from "./components/layout/Footer";
import FormSection from "./components/layout/FormSection";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FormSection/>
      <ExplainSection/>
      <Footer/>
    </div>
  );
};

export default App;
