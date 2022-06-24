import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "views/Home";
import { Money } from "views/Money";
import { Chart } from "views/Chart";
import { Labels } from "views/Labels";
import { NewTag } from "views/NewTag";
import { NoMatch } from "views/NoMatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/money" element={<Money />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/newTag" element={<NewTag />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
