import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>
        What <em>am</em> I doing?
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
