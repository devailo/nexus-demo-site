import { useState } from "react";

import categories from "./database/database.json"

import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";

import './App.css';

function App() {
  
  const [activeCategory, setActiveCategory] = useState('laptops')

  const handleCategoryChange = (category) => {
      setActiveCategory(category)
  }

  return (
    <div className="App">
      <Header onCategoryChange={handleCategoryChange} />
      <main id="main">
        <Main key={activeCategory} allCategories={categories} activeCategory={activeCategory} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
