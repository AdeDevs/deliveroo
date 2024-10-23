import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/cart.css";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./Authentication";
import HomePage from "./Home";
import Orders from "./Order";

const Counter = () => {
  // Local state for each Counter component instance
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="order-qty">
      <button onClick={decrement}>
        <ion-icon name="remove"></ion-icon>
      </button>
      <span>{count}</span>
      <button onClick={increment}>
        <ion-icon name="add"></ion-icon>
      </button>
    </div>
  );
};

function NavBar() {
  const [activeMenu, setActiveMenu] = useState("Categories");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Function to toggle cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Trigger the search functionality
      console.log("Search initiated for:", searchTerm);
      // You can call your search function here, e.g.:
      // performSearch(searchTerm);
    }
  };

  function close(menu) {
    setMenuOpen(false);
    setActiveMenu(menu); // Set the active menu item when clicked
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="nav-page">
      <nav className="nav-bar">
        <div className="first">
          <h1>
            <NavLink to="/"> DELIVEROO </NavLink>
          </h1>
          <input
            type="checkbox"
            id="check"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <ul className={`menu ${isMenuOpen ? "open" : "closed"}`}>
            <li className={activeMenu === "Categories" ? "active" : ""}>
              <a onClick={() => close("Categories")} href="#">
                Categories
              </a>
            </li>
            <li className={activeMenu === "Collections" ? "active" : ""}>
              <a onClick={() => close("Collections")} href="#">
                Why Deliveroo
              </a>
            </li>
            <li className={activeMenu === "Store" ? "active" : ""}>
              <NavLink onClick={() => close("Store")} to="/order">
                Order Now
              </NavLink>
            </li>
            <li id="login-mob">
              <NavLink onClick={() => close("Login")} to="/signin">
                Login
              </NavLink>
            </li>
            <label htmlFor="check" className="close-menu">
              <ion-icon name="close-outline" color="light"></ion-icon>
            </label>
          </ul>
          <label htmlFor="check" className="open-menu">
            <ion-icon name="menu-outline" color="light"></ion-icon>
          </label>
        </div>
        <ul>
          <span id="search">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </span>
          <li onClick={toggleCart}>
            <ion-icon name="cart-outline"></ion-icon>{" "}
            <span id="cart">Cart (10)</span>
          </li>
          <li id="login-desk">
            <NavLink to="/signin">
              {" "}
              <ion-icon name="person-circle-outline"></ion-icon>
              <span id="login">Login</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {isCartOpen && (
        <div
          className={`overlay ${isCartOpen ? "show" : ""}`}
          onClick={toggleCart}
        ></div>
      )}
      <div className={`cart ${isCartOpen ? "show" : ""}`}>
        <nav>
          <section className="cart-header">
            <h1>Checkout</h1>
            <ul>
              <li>
                <ion-icon name="cart-outline" />
                <p>
                  Cart <button id="cart-number">10</button>
                </p>
                {/* Close Button */}
                <ion-icon name="close-outline" onClick={toggleCart} />
              </li>
            </ul>
          </section>
          <div className="order-list">
            <ul className="order-item">
              <li>
                <div>
                  <h1>Jollof Rice</h1>
                  <p>#7,500</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Fried Rice</h1>
                  <p>#7,500</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Moi Moi</h1>
                  <p>#3,500</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Ice Cream</h1>
                  <p>#10,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Coleslaw</h1>
                  <p>#5,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Ewa Agoyin</h1>
                  <p>#5,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Amala and Egusi</h1>
                  <p>#4,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Chicken and Chips</h1>
                  <p>#4,500</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Shawarma</h1>
                  <p>#3,500</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Pizza (Family)</h1>
                  <p>#7,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Saghetti</h1>
                  <p>#2,000</p>
                </div>
                <Counter />
              </li>
            </ul>
            <ul className="order-item">
              <li>
                <div>
                  <h1>Pounded yam and egusi</h1>
                  <p>#2,500</p>
                </div>
                <Counter />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<Orders />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default NavBar;
