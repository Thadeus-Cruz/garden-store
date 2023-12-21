import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/signup.css';


class Signup extends React.Component {
  render() {
    return (
    <div>
      <header className="App-header">
        <h3 className="App-slogan">Cultivate Joy, Garden the Way Nature Intended</h3>
      </header>
      <div className="signup-box">
        <div>
          <h2>Sign Up</h2>
          <form>
            <div className="user-box">
              <input type="text" name="username" required />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="email" name="email" required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="password" required />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input type="password" name="confirmPassword" required/>
              <label>Confirm Password</label>
            </div>
            <button type="submit">Sign up</button>
            <p>
              Already have an account? 
              <Link to="/login"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default Signup;
