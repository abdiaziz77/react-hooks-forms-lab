import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";

function ShoppingList({ items, onItemFormSubmit }) {
  const [searchText, setSearchText] = useState("");

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }

  const itemsToDisplay = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter searchText={searchText} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <li key={item.id}>
            {item.name} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
