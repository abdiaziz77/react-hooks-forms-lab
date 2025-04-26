import React from "react";

function Filter({ searchText, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search items..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Filter;
