import { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSearch, onReset, setSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!query) {
      onReset();
      return;
    }
    const { data } = await axios.get(`/api/search?term=${query}`);
    setSearchResults(data);
    onSearch(data);
  };

  return (
    <div className="search-bar p-2 bg-white rounded-full flex shadow-md max-w-lg mx-auto">
      <input
        className="search-input bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-4 leading-tight focus:outline-none"
        type="text"
        placeholder="Search..."
        value={query}
        onKeyDown={handleKeyDown}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
