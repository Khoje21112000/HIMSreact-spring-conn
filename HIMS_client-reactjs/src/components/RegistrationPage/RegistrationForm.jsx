import React from "react";
import "./RegistrationForm.css";
import axios from "axios";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      middleName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      gender: "",
      otpSent: false,
      otp: "",
      errorMessage: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleOTPChange = (e) => {
  //   this.setState({ otp: e.target.value });
  // };

  // sendOTP = () => {
  //   // Replace 'your-otp-api-url' with your actual API endpoint for sending OTP
  //   axios.post("your-otp-api-url", { mobileNumber: this.state.mobileNumber })
  //     .then(response => {
  //       // Handle response
  //       this.setState({ otpSent: true });
  //     })
  //     .catch(error => {
  //       console.error("Error sending OTP:", error);
  //       this.setState({ errorMessage: "Failed to send OTP. Please try again." });
  //     });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // Validate OTP
    // Replace 'your-otp-validation-api-url' with your actual API endpoint for validating OTP
    axios.post("http://localhost:8080/api/user", this.state)
      .then((res) => {
        console.log(res);
      });
  };

  // registerUser = () => {
    // Perform registration
    // Replace 'your-registration-api-url' with your actual API endpoint for user registration
    // Spring Boot
    // axios.post("http://localhost:8080/api/user", this.state)
    //   .then((res) => {
    //     console.log(res);
    //   });
  // };

  render() {
    const { firstName, middleName, lastName, dob, email, mobileNumber, gender, otpSent, errorMessage } = this.state;

    return (
      // <div>
      <div>
        <form action="" onSubmit={this.SubmitHandler} className="registration-form">
          <h1>Registration</h1>
          <hr />
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={this.handleChange} required />

          {/* Middle Name, Last Name, Date of Birth, Email, Gender fields */}
          {/* ... */}

          <label for="middleName">Middle Name:</label>
      <input type="text" id="middleName" name="middleName" value={middleName} onChange={this.handleChange} />

      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={lastName} onChange={this.handleChange} required />

      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" value={dob} onChange={this.handleChange} required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={this.handleChange} required />

      <label for="gender">Gender:</label>
      <select id="gender" name="gender" value={gender} onChange={this.handleChange} required>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

          {/* Mobile Number */}
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" value={mobileNumber} onChange={this.handleChange} pattern="[0-9]{10}" required />

          {/* OTP */}
          {otpSent ? (
            <div>
              <label htmlFor="otp">OTP:</label>
              <input type="text" id="otp" name="otp" value={this.state.otp} onChange={this.handleOTPChange} required />
            </div>
          ) : null}

          {/* OTP button */}
          {!otpSent ? (
            <button type="button" onClick={this.sendOTP}>Send OTP</button>
          ) : null}

          {/* Register button */}
          <button type="submit">Register</button>

          {/* Error message */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
      // </div>
    );
  }
}

export default RegistrationForm;
