import FoodCard from "./FoodCard";
import menu from "../data/menu";

function FoodMenu({ addToCart }) {

  return (
    <div className="food-menu">

      {menu.map((item) => (
        <FoodCard
          key={item.id}
          item={item}
          addToCart={addToCart}
        />
      ))}

    </div>
  );
}

export default FoodMenu;