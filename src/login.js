import React from "react";

function Login() {
  return (
    <div>
      <div class="login-container">
        <div class="login-box">
          <h2>Log In</h2>
          <form>
            <div class="input-group">
              <label for="apogee">Email Institutionnel </label>
              <input
                type="text"
                id="apogee"
                name="apogee"
                placeholder="LastName.FirstName@etu.uae.ac.ma"
                required
              ></input>
            </div>
            <div class="input-group">
              <label for="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              ></input>
            </div>
            <button type="submit" class="login-button">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
