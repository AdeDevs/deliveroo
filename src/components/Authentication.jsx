import { NavLink } from "react-router-dom";

export function SignIn() {
  return (
    <div className="auth">
      <div className="sign-in">
        <form action="" method="post">
        <h1>Sign In</h1>
        <p>Fill The Information Below</p>
          <input id="mail" type="email" placeholder="Email" required/>
          <input id="password" type="password" placeholder="Password" required/>
          <section className="options">
          <button id="in" type="submit"> Sign In </button> <NavLink to="/signup"> <button> Sign Up </button> </NavLink>
          </section>
          <button>Continue With <span>Google <ion-icon name="logo-google"></ion-icon></span></button>
          <button>Continue With <span>Apple <ion-icon name="logo-apple"></ion-icon></span></button>
        </form>
      </div>
    </div>
  );
}

export function SignUp() {
  return (
    <div className="auth">
      <div className="sign-up">
        <form action="" method="post">
        <h1>Sign Up</h1>
        <p>Fill The Information Below</p>
          <input id="name" type="text"  placeholder="Name" required/>
          <input id="username" type="text" placeholder="Username" required/>
          <input id="mail" type="email" placeholder="Email" required/>
          <input id="number" type="tel" placeholder="Number" maxLength="11" pattern="[0-9]*" required/>
          <input id="password" type="password" placeholder="Password" required/>
          <section className="options">
          <NavLink id="up" to="/signin"><button> Sign In </button></NavLink> <button type="submit"> Sign Up </button>
          </section>
          <button>Continue With <span>Google <ion-icon name="logo-google"></ion-icon></span></button>
          <button>Continue With <span>Apple <ion-icon name="logo-apple"></ion-icon></span></button>
        </form>
      </div>
    </div>
  );
}
