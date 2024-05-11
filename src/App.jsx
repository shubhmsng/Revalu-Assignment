import Header from "src/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collections from "src/pages/collections";
import Elements from "src/pages/elements";
import Manufacturers from "src/pages/manufacturers";
import Materials from "src/pages/materials";
import Projects from "src/pages/projects";

import { Root } from "src/styles";

function App() {
  return (
    <Root>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/collections" element={<Collections />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="manufacturers" element={<Manufacturers />} />
          <Route path="materials" element={<Materials />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/" element={<Collections />} />
          <Route path="/*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </Root>
  );
}

export default App;
