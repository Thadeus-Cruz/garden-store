import React from "react";
import "../assets/login.css"; // Import the stylesheet here
import { Link, useHistory } from "react-router-dom";
import FlowerGarden from "./garden";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    // Replace 'http://localhost:3000/login' with the actual URL of your JSON server
    const apiUrl = 'http://localhost:3000/login';

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const user = data.login.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // Successfully authenticated, navigate to the dashboard
        this.props.history.push("/dashboard");
      } else {
        this.setState({ error: "Invalid username or password" });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ error: "An error occurred while processing your request" });
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
        <div className="login-box">
          <div>
            <h2>Login</h2>
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
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <label>Password</label>
              </div>
              {this.state.error && <p className="error">{this.state.error}</p>}
              <button type="submit">
                <Link to="/dashboard">Login</Link>
                {/* <Link to="/aboutus">About Us</Link> */}
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
