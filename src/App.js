import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Main from "./components/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Container fluid className="p-0">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
