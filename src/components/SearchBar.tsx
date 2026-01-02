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

  return (
    <div>
      <input
        type="search"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchBar;
