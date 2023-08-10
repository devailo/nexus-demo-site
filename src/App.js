import { useState } from "react";

import categories from "./database/database.json"

import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";

import './App.css';

function App() {

  const [selectedCategory, setSelectedCategory] = useState('laptops')

  const handleLinkClick = (category) => {
    setSelectedCategory(category)
  }


  return (
    <div className="App">
      <Header handleLinkClick={handleLinkClick} />
      <main id="main">
        <Main products={categories[selectedCategory]} categoryName={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
