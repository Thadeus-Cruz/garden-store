import React from "react";
import "./login.css"; // Import the stylesheet here
import Signup from "./signup";

class Login extends React.Component {
  render() {
    return (
      <div>
      <header className="App-header">
          <h1 className="App-title">Blossom Haven Garden Emporium</h1>
          <h3 className="App-slogan">Cultivate Joy, Garden the Way Nature Intended</h3>
        </header>
      <div className="login-box" >
        <div>
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="username" required />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="password" required />
              <label>Password</label>
            </div>
            <button type="submit">Login</button>
            <p>
              Don't have an account? <a href="Signup">Create Account</a>
            </p>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
