'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    const dummyData = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    const filtered = dummyData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="max-w-md mx-auto p-4 relative ">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
      </div>

      {query && (
        <ul className="absolute w-full mt-2 bg-white border rounded-xl shadow-lg z-50">
          {results.length > 0 ? (
            results.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
