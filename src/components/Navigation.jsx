import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [activeMenu, setActiveMenu] = useState("Categories");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Trigger the search functionality
      console.log('Search initiated for:', searchTerm);
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
        <nav>
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
                <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
            </span>
            <li>
              <NavLink>
              <ion-icon name="cart-outline"></ion-icon>{" "}
              <span id="cart">Cart (0)</span>
              </NavLink>
            </li>
            <li id="login-desk">
              <NavLink to="/signin"> <ion-icon name="person-circle-outline"></ion-icon>
              <span id="login">Login</span>
              </NavLink>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default NavBar;
