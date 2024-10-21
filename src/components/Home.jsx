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
        </div>
    )
}

export default HomePage;