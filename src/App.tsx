import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./views/Home";
import { Money } from "./views/Money";
import { Statistics } from "./views/Statistics";
import { Labels } from "./views/Labels";
import { NewTag } from "./views/NewTag";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/money" element={<Money />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/labels" element={<Labels />} />
          <Route path="/newTag" element={<NewTag />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
