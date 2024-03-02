import "./App.css";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      <Hero />
    </div>
  );
}

export default App;
