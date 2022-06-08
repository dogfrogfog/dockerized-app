import './SearchTable.css';

export const SearchTable = ({ searchResult }) => (
  <div className='search-table'>
    {
      [searchResult].map(({ id, src }) => (
        <img src={src} alt="img" key={id} />
      ))
    }
  </div>
);