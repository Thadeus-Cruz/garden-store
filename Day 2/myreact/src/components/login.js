import React from "react";
import { Link } from "react-router-dom";
import '../assets/login.css';

class Login extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h3 className="App-slogan">Cultivate Joy, Garden the Way Nature Intended</h3>
        </header>
        <div className="login-box">
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
              <button type="submit">
                <Link to="/dashboard">Login</Link>
              </button>
              <p>
                Don't have an account? <Link to="/signup">Create Account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
