import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./component/footer/footer";
import Pages from "./pages/Pages";
import PopupPage from "./pages/PopupPage";
import "./App.css";

function App() {
  return (
    <div className="main">
      <PopupPage />
      <Router>
        <Pages />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
