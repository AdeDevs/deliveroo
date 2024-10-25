import { NavLink } from "react-router-dom";

function HomePage() {
    return (
        <div className="home">
            <header>
                <div className="landing-info">
                    <h1>Delivery Fast, <br /> Satisfaction All The Time</h1>
                    <p>
                        Meal prepared with love and care to suit your taste every time, great taste and healthy, eat clean, eat real food
                    </p>
                    <NavLink to="/order"> <button>Order Now</button> </NavLink>
                    <ul>
                        <li>
                            <h2><span><ion-icon name="time"></ion-icon></span> Opening Hours</h2>
                            <p>Everyday 8am - 10pm</p>
                        </li>
                        <li>
                            <h2><span><ion-icon name="location"></ion-icon></span> Locations</h2>
                            <p>Canada - London</p>
                        </li>
                        <li>
                            <h2><span><ion-icon name="call"></ion-icon></span> Call Us</h2>
                            <p>090 1234 5678</p>
                        </li>
                    </ul>
                </div>
                <div className="landing-food"></div>
            </header>
            <main>
                <div className="short-categories">
                    <header>
                        <h1>Get Into It</h1>
                        <NavLink to="/categories">Check Out Our Full Menu</NavLink>
                    </header>
                    <div className="short-menu">
                        <div>
                            <section className="food-image"></section>
                            <section className="food-info">
                                <aside>
                                    <h1>Jollof Rice</h1>
                                    <p>₦ 3,500</p>
                                </aside>
                                <aside>
                                    <h2> <ion-icon name="cart-outline"></ion-icon> </h2>
                                </aside>
                            </section>
                        </div>
                        <div>
                            <section className="fried-rice"></section>
                            <section className="food-info">
                                <aside>
                                    <h1>Fried Rice</h1>
                                    <p>₦ 3,500</p>
                                </aside>
                                <aside>
                                    <h2> <ion-icon name="cart-outline"></ion-icon> </h2>
                                </aside>
                            </section>
                        </div>
                        <div>
                            <section className="shawarma"></section>
                            <section className="food-info">
                                <aside>
                                    <h1>Shawarma</h1>
                                    <p>₦ 2,500</p>
                                </aside>
                                <aside>
                                    <h2> <ion-icon name="cart-outline"></ion-icon> </h2>
                                </aside>
                            </section>
                        </div>
                        <div>
                            <section className="coconut-rice"></section>
                            <section className="food-info">
                                <aside>
                                    <h1>Coconut Rice</h1>
                                    <p>₦ 4,000</p>
                                </aside>
                                <aside>
                                    <h2> <ion-icon name="cart-outline"></ion-icon> </h2>
                                </aside>
                            </section>
                        </div>
                        <div>
                            <section className="amala"></section>
                            <section className="food-info">
                                <aside>
                                    <h1>Amala</h1>
                                    <p>₦ 2,500</p>
                                </aside>
                                <aside>
                                    <h2> <ion-icon name="cart-outline"></ion-icon> </h2>
                                </aside>
                            </section>
                        </div>
                        <div>
                            <section className="pasta"></section>
                            <section className="food-info">
                                <aside>
                                    <h1>Pasta</h1>
                                    <p>₦ 4,000</p>
                                </aside>
                                <aside>
                                    <h2> <ion-icon name="cart-outline"></ion-icon> </h2>
                                </aside>
                            </section>
                        </div>
                        <div>
                            <section className="ewa-agoyin"></section>
                            <section className="food-info">
                                <aside>
                                    <h1>Ewa Agoyin</h1>
                                    <p>₦ 5,000</p>
                                </aside>
                                <aside>
                                    <h2> <ion-icon name="cart-outline"></ion-icon> </h2>
                                </aside>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage;