import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About /> 
      <Service />
      <WhyUs />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
