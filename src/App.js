import { useState } from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Container } from "react-bootstrap";

import Header from "./components/Header";
import CompareLists from "./components/CompareLists";
import TextFixer from "./components/TextFixer";
import CompareText from "./components/CompareText";
import CSVSplitter from "./components/CSVSplitter";
import TextColumnizer from "./components/textColumnizer";
import ColumnExtractor from "./components/ColumnExtractor";
import VLookupOnline from "./components/VLookupOnline";



import Footer from "./components/Footer";



function App() {

  const [linesCount, setLinesCount] = useState();

  const handleChange = (event) => {
    let linesArea = event.target.value
    let lines = linesArea.split("\n");
    let count = lines.length;
    setLinesCount(count);
    console.log(count);
  };
  return (
    <Router>
      <Container fluid className="p-0 pb-5">
        <Header />
        <Routes>
          <Route exact path="/" element={<CompareLists />} />
          <Route exact path="/compareText" element={<CompareText />} />
          <Route exact path="/textFixer" element={<TextFixer />} />
          <Route exact path="/csvSplitter" element={<CSVSplitter />} />
          <Route exact path="/textColumnizer" element={<TextColumnizer />} />
          <Route exact path="/columnExtractor" element={<ColumnExtractor />} />
          <Route exact path="/VLookupOnline" element={<VLookupOnline />} />
          
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
