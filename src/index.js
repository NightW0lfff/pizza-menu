import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data.js";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza data={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}
function Footer() {
  const time = new Date().getHours();
  const close = 22;
  const open = 8;

  const isOpen = open <= time && time <= close;
  const storeState = isOpen
    ? "We're currently open!"
    : "We're currently close!";

  return (
    <footer className="footer">
      <div className="order">
        <p>{storeState}</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.data.soldOut ? "sold-out" : ""}`}>
      <img src={props.data.photoName} alt={props.data.name} />
      <div>
        <h3>{props.data.name}</h3>
        <p>{props.data.ingredients}</p>
        <span>{props.data.soldOut ? "SOLD OUT" : props.data.price}</span>
      </div>
    </li>
  );
}

//React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
