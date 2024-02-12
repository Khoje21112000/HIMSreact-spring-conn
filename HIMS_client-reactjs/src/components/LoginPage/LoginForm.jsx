import React from "react";
import './LoginForm.css';
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  Handler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    // custom API
    //.Net Core
    //axios.post("http://localhost:5293/api/user", this.state)

    // Spring Boot
    axios.post("http://localhost:8080/api/user", this.state)
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="wrapper">
        <form action="" onSubmit={this.SubmitHandler}>
            <h1>Login</h1>
            <div className="input-box">
                <input onChange={this.Handler} type="email" name="email" placeholder="Username"  required />
                <FaUser className="icon"/>
            </div>
            
            <div className="input-box">
                <input onChange={this.Handler} value={password} type="password"
                name="password"
                placeholder="Password"  required />
                <FaLock className="icon"/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remembr me</label>
                <a href="#">Forgot password</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
               <p> Don't have an account?<Link href="./components/RegistrationForm">Register</Link></p>
            </div>
        </form>
    </div>
    );
  }
}

export default LoginForm;



