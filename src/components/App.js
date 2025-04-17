import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

const items = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Carrots", category: "Produce" },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
