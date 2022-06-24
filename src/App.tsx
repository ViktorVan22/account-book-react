import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "views/Home";
import { Money } from "views/Money";
import { Chart } from "views/Chart";
import { Labels } from "views/Labels";
import { NewTag } from "views/NewTag";
import { NoMatch } from "views/NoMatch";
import { Settings } from "views/Settings";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/money" element={<Money />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/newTag" element={<NewTag />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
