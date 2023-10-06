import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import CompareLists from "./components/CompareLists";
import TextFixer from "./components/TextFixer";
import CompareText from "./components/CompareText";
import CSVSplitter from "./components/CSVSplitter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Container fluid className="p-0 pb-5">
        <Header />
        <Routes>
          <Route exact path="/" element={<CompareLists />} />
          <Route exact path="/compareText" element={<CompareText />} />
          <Route exact path="/textFixer" element={<TextFixer />} />
          <Route exact path="/csvSplitter" element={<CSVSplitter />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
