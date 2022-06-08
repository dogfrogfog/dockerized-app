import { useCallback } from 'react';
import { get } from 'axios';

import './SearchPanel.css';

export const SearchPanel = ({ setSearchResults }) => {
  const handleSearch = useCallback(async ({ target: { value } }) => {
    const { data } = await get(
      `http://localhost:8080/api/fruits?amount=${value}`
    );

    setSearchResults(data);
  }, [setSearchResults]);

  return (
    <div className='search-panel'>
      <input placeholder="на каждое нажатие будет новая картинка" onChange={handleSearch} type="number" />
    </div>
  );
};

