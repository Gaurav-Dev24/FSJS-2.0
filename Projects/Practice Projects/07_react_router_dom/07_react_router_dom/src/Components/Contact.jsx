import React from "react";
import "../App.css";
const Contact = () => {
  return (
    <div className="contact">
      <h1>Welcome to Contact Page</h1>
      <form action="#" className="form">
        <input
          type="text"
          name="name"
          id="firstName"
          placeholder="Enter your Name"
        />
        <input
          type="email"
          name="email"
          id="emailAddress"
          placeholder="Enter your e-mail"
        />
      </form>
      <button className="submit">Submit</button>
    </div>
  );
};

export default Contact;
