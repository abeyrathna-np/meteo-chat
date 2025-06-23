// src/App.jsx
import React from "react";
import ChatBox from "./components/ChatBox";
import Footer from "./components/Footer";
import HeaderComponent from "./components/HeaderComponent";
import HomeSlider from "./components/HomeSlider";

function App() {
  return (
    <div className="page-container">
      <HeaderComponent />
      <div className="content-wrap">
        <HomeSlider />

          <ChatBox />
      </div>
      <Footer />
    </div>
  );
}

export default App;
