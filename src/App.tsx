import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "views/Home";
import { Money } from "views/Money";
import { Chart } from "views/Chart";
import { Labels } from "views/Labels";
import { IncomeIcons, NewTag, OutcomeIcons } from "views/NewTag";
import { NoMatch } from "views/NoMatch";
import { IncomeLabels, OutcomeLabels } from "views/money/TagsSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/money" element={<Money />}>
          <Route index element={<OutcomeLabels />} />
          <Route path="outcome" element={<OutcomeLabels />} />
          <Route path="income" element={<IncomeLabels />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/chart" element={<Chart />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/newTag" element={<NewTag />}>
          <Route index element={<OutcomeIcons />} />
          <Route path="outcome" element={<OutcomeIcons />} />
          <Route path="income" element={<IncomeIcons />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
