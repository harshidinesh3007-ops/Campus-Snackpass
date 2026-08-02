function CategoryFilter({ setCategory }) {

  return (
    <div className="category-filter">

      <button onClick={() => setCategory("All")}>
        All
      </button>

      <button onClick={() => setCategory("Snacks")}>
        Snacks
      </button>

      <button onClick={() => setCategory("Drinks")}>
        Drinks
      </button>

      <button onClick={() => setCategory("Meals")}>
        Meals
      </button>

    </div>
  );
}

export default CategoryFilter;