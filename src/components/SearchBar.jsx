function SearchBar({ setSearch }) {

  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="Search food..."
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;