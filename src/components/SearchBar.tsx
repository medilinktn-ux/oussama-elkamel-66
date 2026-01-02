import React, { useState } from 'react';
import Button from '../ui/button';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log(searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleClearInput = () => {
    setSearchQuery('');
  };

  return (
    <div>
      <input
        type="search"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {searchQuery && (
        <Button className="clear-input" onClick={handleClearInput}>Clear</Button>
      )}
      <Button onClick={handleSearch} disabled={!searchQuery}>Search</Button>
    </div>
  );
};

export default SearchBar;
