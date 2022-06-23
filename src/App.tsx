import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "views/Home";
import { Money } from "views/Money";
import { Statistics } from "views/Statistics";
import { Labels } from "views/Labels";
import { NewTag } from "views/NewTag";
import { NoMatch } from "views/NoMatch";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/money" element={<Money />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/labels" element={<Labels />} />
          <Route path="/newTag" element={<NewTag />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
