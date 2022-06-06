import './SearchTable.css';

export const SearchTable = ({ searchResult }) => {
  console.log(searchResult);

  return (
    <div className='search-table'>
      {
        searchResult.map(({ id, url }) => (
          <img src={url} alt="img" key={id} />
        ))
      }
    </div>
  );
};