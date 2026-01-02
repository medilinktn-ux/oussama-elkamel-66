import React, { useState } from 'react';
function SearchBar() {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}
export default SearchBar;