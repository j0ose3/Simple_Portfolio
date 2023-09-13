import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
