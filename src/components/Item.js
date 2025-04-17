import React from "react";

function Item({ name, category }) {
  return (
    <li className="Item">
      <h3>{name}</h3>
      <p>{category}</p>
    </li>
  );
}

export default Item;
