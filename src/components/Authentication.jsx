import { useState } from "react";
import { NavLink } from "react-router-dom";

export function SignIn() {
  return (
    <div className="auth">
        <h1>Sign In</h1>
      <div className="sign-in">
        <form action="" method="post">
          <input type="email" placeholder="Type In Your Email" required/>
          <input type="password" placeholder="Type In Your Password" required/>
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
        <h1>Sign Up</h1>
      <div className="sign-up">
        <form action="" method="post">
          <input type="text"  placeholder="Type In Your Name" required/>
          <input type="text" placeholder="Type In Your Username" required/>
          <input type="email" placeholder="Type In Your Email" required/>
          <input type="tel" placeholder="Type In Your Number" maxLength="11" pattern="[0-9]*" required/>
          <input type="password" placeholder="Type In Your Password" required/>
          <section className="options">
          <NavLink id="up" to="/"><button> Sign In </button></NavLink> <button type="submit"> Sign Up </button>
          </section>
          <button>Continue With <span>Google <ion-icon name="logo-google"></ion-icon></span></button>
          <button>Continue With <span>Apple <ion-icon name="logo-apple"></ion-icon></span></button>
        </form>
      </div>
    </div>
  );
}
