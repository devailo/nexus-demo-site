import { Routes, Route } from "react-router-dom";
import categories from "./database/database.json"

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { Main } from "./components/Main/Main";

import './App.css';

console.log(categories);

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
