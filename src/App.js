import "./App.css";
import Main from "./components/Main";
import ReactNavbar from "./components/ReactNavbar";
import Main2 from "./components/Main2";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ReactNavbar />
      <div id="about-us">
        <Main />
      </div>
      <div id="available">
        <Main2 />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact-us">
        <Footer />
      </div>
    </div>
  );
}

export default App;
