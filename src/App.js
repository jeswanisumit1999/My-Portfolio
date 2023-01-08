import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Socials from "./components/Socials";

function App() {
  return (
   <div>
    <Navbar />
    <Home />
    <Skills />
    <Contact />
    <Footer/>
    <Socials />
   </div>
  );
}

export default App;
