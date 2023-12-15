// TypeableDropdown.js

import { useState } from "react";

const TypeableDropdown = ({ data, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    const filteredItems = data.filter((item) =>
      item.toLowerCase().includes(value)
    );
    setFilteredData(filteredItems);
    setShowDropdown(true);
  };

  const handleItemClick = (item) => {
    setInputValue(item);
    setShowDropdown(false);
  };

  return (
    <div className="dropdown">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      {showDropdown && (
        <ul className="dropdown-list">
          {filteredData.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TypeableDropdown;
