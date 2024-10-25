import { NavLink, Route, Routes } from "react-router-dom";
import Jollof from "../assets/jollof-bg-removebg-preview.png";
import CoconutRice from "../assets/food/coconut-rice.png";
import Amala from "../assets/food/amala.png";
import ChickenBucket from "../assets/chicken.png";
import Coke from "../assets/food/coke.png";
import Chocolate from "../assets/food/Chocolate.png";
import Fanta from "../assets/food/Fanta.png";
import FriedRice from "../assets/food/fried-rice.png";
import Hollandia from "../assets/food/hollandia.png";
import VanillaIceCream from "../assets/food/ice-cream.png";
import Maltina from "../assets/food/maltina.png";
import PassionFruit from "../assets/food/Passionfruit.png";
import Pasta from "../assets/food/pasta.png";
import Vanilla from "../assets/food/Vanilla.png";


function CategoriesPage() {
  return (
    <div className="categories">
      <header>
        <nav>
            <NavLink to="/categories" end>  Rice</NavLink>
            <NavLink to="swallow">  Swallow</NavLink>
            <NavLink to="icecream">  Ice Cream</NavLink>
            <NavLink to="chicken">  Chicken</NavLink>
            <NavLink to="drinks">  Drinks</NavLink>
        </nav>
      </header>
      <Routes>
      <Route path="/" element={<Rice />}/>
      <Route path="swallow" element={<Swallow />} />
      <Route path="icecream" element={<IceCream />} />
      <Route path="chicken" element={<Chicken />} />
      <Route path="drinks" element={<Drinks />} />
      </Routes>
    </div>
  );
}

export default CategoriesPage;

function Rice() {
    return (
      <div className="menu">
      <div>
        <section className="food-image">
          <img src={Jollof} alt="Jollof" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Jollof Rice</h1>
            <p>₦ 3,500</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
      <div>
        <section className="food-image">
          <img src={FriedRice} alt="Fried Rice" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Fried Rice</h1>
            <p>₦ 3,500</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
      <div>
        <section className="food-image">
          <img src={CoconutRice} alt="Coconut Rice" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Coconut Rice</h1>
            <p>₦ 4,000</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
      <div>
        <section className="food-image">
          <img src={Pasta} alt="Pasta" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Pasta</h1>
            <p>₦ 4,000</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
    </div>
    )
}

function Swallow() {
    return (
      <div className="menu">
      <div>
        <section className="food-image">
          <img src={Amala} alt="Amala" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Amala</h1>
            <p>₦ 2,500</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
    </div>
    )
}

function IceCream() {
    return (
      <div className="menu">
      <div>
        <section className="food-image">
          <img src={Vanilla} alt="VanillaIceCream" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Vanilla Ice Cream</h1>
            <p>₦ 5,500</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
      <div>
        <section className="food-image">
          <img src={Chocolate} alt="Chocolate" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Chocolate Ice Cream</h1>
            <p>₦ 5,500</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
      <div>
        <section className="food-image">
          <img src={PassionFruit} alt="PassionFruit" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Passionfruit Ice Cream</h1>
            <p>₦ 5,500</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
      <div>
        <section className="food-image">
          <img src={VanillaIceCream} alt="VanillaIceCream" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Chocolate Fudge Brownie</h1>
            <p>₦ 4,500</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
    </div>
    )
}

function Chicken() {
    return (
      <div className="menu">
      <div>
        <section className="food-image">
          <img src={ChickenBucket} alt="ChickenBucket" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Chicken Bucket</h1>
            <p>₦ 4,500</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
    </div>
    )
}

function Drinks() {
    return (
      <div className="menu">
      <div>
        <section className="drink-image">
          <img src={Coke} alt="Coke" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Coke</h1>
            <p>₦ 700</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
      <div>
        <section className="drink-image">
          <img src={Fanta} alt="Fanta" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Fanta</h1>
            <p>₦ 700</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
      <div>
        <section className="drink-image">
          <img src={Hollandia} alt="Hollandia" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Hollandia</h1>
            <p>₦ 2,000</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
      <div>
        <section className="drink-image">
          <img src={Maltina} alt="Maltina" />
        </section>
        <section className="food-info">
          <aside>
            <h1>Maltina</h1>
            <p>₦ 800</p>
          </aside>
          <aside>
            <h2>
              {" "}
              <ion-icon name="cart-outline"></ion-icon>{" "}
            </h2>
          </aside>
        </section>
      </div>
    </div>
    )
}