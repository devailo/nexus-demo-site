import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Laptops } from "./components/Laptops/Laptops";
import { Phones } from "./components/Phones/Phones";
import { Tablets } from "./components/Tablets/Tablets";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Laptops />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/tablets" element={<Tablets />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
