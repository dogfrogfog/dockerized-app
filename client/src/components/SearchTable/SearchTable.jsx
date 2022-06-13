import './SearchTable.css';

export const SearchTable = ({ searchResult }) => (
  <div className='search-table'>
    {
      searchResult.map(({ id, src }) => (
        <img src={src} alt={`image_${id}`} key={id} />
      ))
    }
  </div>
);