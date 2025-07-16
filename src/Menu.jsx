import Pizza from './Pizza.jsx';
import './index.css';

export default function Menu(){
  const pizzas = pizzaData;


    return (
      <main className='menu'>
        <h2>MENU</h2>

        {
          !!pizzas.length?

          <>
          <p>authentic italian cuisine with 6 original dishes etc.</p>
          <ul className='pizzas'>
            {
              pizzas.map((pizza)=>{
                return(
                  <Pizza 
                          pizza={pizza}
                          key={pizza.name}
                          />
                    )
                  })
                }
            
          </ul>
        </>
        :<p>we're currently working on our menu</p>
        }
      </main>
    )
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
