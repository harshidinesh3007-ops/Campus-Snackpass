import burger from "../assets/burger.jpg";
import frenchfries from "../assets/frenchfries.jpg";
import coldcoffee2 from "../assets/coldcoffee2.jpeg";
import pizzaa from "../assets/pizzaa.jpg";
import sandwich from "../assets/sandwich.jpeg";
import tea from "../assets/tea.jpeg";
import friedrice from "../assets/friedrice.jpg";
import pasta from "../assets/pasta.jpg";

const menu = [
  {
    id: 1,
    name: "Veg Burger",
    category: "Snacks",
    price: 80,
    image: burger
  },
  {
    id: 2,
    name: "French Fries",
    category: "Snacks",
    price: 70,
    image: frenchfries
  },

  {
    id: 3,
    name: "Cold Coffee",
    category: "Drinks",
    price: 60,
    image: coldcoffee2
  },
  {
    id: 4,
    name: "Pizza",
    category: "Meals",
    price: 180,
    image: pizzaa
  },
  {
 id:5,
 name:"Sandwich",
 category:"Snacks",
 price:90,
 image: sandwich
},

{
 id:6,
 name:"Tea",
 category:"Drinks",
 price:30,
 image: tea
},

{
 id:7,
 name:"Fried Rice",
 category:"Meals",
 price:120,
 image: friedrice
},
{
 id:8,
 name:"Pasta",
 category:"Meals",
 price:150,
 image: pasta
}

];
export default menu