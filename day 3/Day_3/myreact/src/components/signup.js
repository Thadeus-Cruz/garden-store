import React from 'react';
import '../assets/signup.css';
import axios from 'axios';
import FlowerGarden from './garden';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = this.state;

    // Replace 'https://your-api-endpoint.com/register' with your actual server endpoint
    const registrationEndpoint = 'https://your-api-endpoint.com/register';

    try {
      const response = await axios.post(registrationEndpoint, {
        username,
        email,
        password,
        confirmPassword,
      });

      console.log('Registration successful:', response.data);

      // Optionally, you can redirect the user to a login page or perform other actions
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      // Handle error scenarios, such as displaying an error message to the user
    }
  };

  render() {
    return (
      <div>
        <FlowerGarden />
        <header className="App-header">
          <h1 className="App-title">Blossom Haven Garden Emporium</h1>
          <h3 className="App-slogan">Cultivate Joy, Garden the Way Nature Intended</h3>
        </header>
        <div className="signup-box">
          <div>
            <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="user-box">
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <label>Password</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  required
                />
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
