import React from "react";
import "./App.css";

function LoginForm() {
  return (
    <div className="App">
      <form data-testid="login-form">
        <span>Email</span>
        <input type="email" />
      </form>
    </div>
  );
}

export default LoginForm;
