import { useCallback } from 'react';
import { get } from 'axios';

import './SearchPanel.css';

export const SearchPanel = ({ setSearchResults }) => {
  const handleSearch = useCallback(async ({ target: { value } }) => {
    const { data } = await get(
      `https://api.thecatapi.com/v1/images/search?limit=${value}`
    );

    setSearchResults(data)
  }, [setSearchResults]);

  return (
    <div className='search-panel'>
      <input placeholder="Сколько котов показать" onChange={handleSearch} type="number" />
    </div>
  );
};

