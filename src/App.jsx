import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
