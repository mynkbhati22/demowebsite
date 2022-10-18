import "./App.css";
import Main from "./components/Main";
import ReactNavbar from "./components/ReactNavbar";
import Main2 from "./components/Main2";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <ReactNavbar />
      <Main />
      <Main2 />
      <Testimonials />
    </div>
  );
}

export default App;
