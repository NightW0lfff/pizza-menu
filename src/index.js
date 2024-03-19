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
      <Pizza />
    </main>
  );
}
function Footer() {
  const time = new Date().getHours();
  const close = 22;
  const open = 8;

  const isOpen = open <= time && time <= close;
  const storeState = isOpen
    ? "We're open currently!"
    : "We're close currently!";

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. {storeState}
    </footer>
  );
}

function Pizza() {
  return (
    <div className="pizzas">
      {pizzaData.map((data) => (
        <div className="pizza">
          <div>
            <img src={data.photoName} alt="pizza" />
            <h3>{data.name}</h3>
            <p>{data.ingredients}</p>
            <span>{data.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

//React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
