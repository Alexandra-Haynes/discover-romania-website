import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./routes/Home";
import { Visit } from "./routes/Visit";
import { About } from "./routes/About";
import { Photo } from "./routes/Photo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Visit />} path="/visit" />
        <Route element={<Photo />} path="/gallery" />
      </Routes>
    </div>
  );
}

export default App;
