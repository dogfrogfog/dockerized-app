import './SearchTable.css';

export const SearchTable = ({ searchResult }) => (
  <div className='search-table'>
    {
      searchResult.map(({ id, url }) => (
        <img src={url} alt="img" key={id} />
      ))
    }
  </div>
);