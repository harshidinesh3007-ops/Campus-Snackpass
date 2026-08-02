function FoodCard({ item, addToCart }) {
  return (
    <div className="food-card">

      <img 
  className="food-image"
  src={item.image}
  alt={item.name}
/>

      <h3>{item.name}</h3>
      <p>{item.category}</p>
      <p>₹{item.price}</p>

      <button onClick={() => addToCart(item)}>
        Add to Cart
      </button>

    </div>
  );
}

export default FoodCard;