import React from "react";
import Header from "./components/principales/Header";
import Footer from "./components/principales/Footer";
import Content from "./components/principales/Content";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
