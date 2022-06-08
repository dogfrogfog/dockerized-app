import { useState } from 'react';
import { SearchPanel } from 'components/SearchPanel';
import { SearchTable } from 'components/SearchTable';

import './App.css';

export const App = () => {
  const [searchResult, setSearchResults] = useState([]);

  return (
    <div className="App">
      <SearchPanel setSearchResults={setSearchResults} />
      <SearchTable searchResult={searchResult} />
    </div>
  );
}
