import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}

export default Header;