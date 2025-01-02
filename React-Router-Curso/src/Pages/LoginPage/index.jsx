import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Components/Auth";
import "./styles.css";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = React.useState();
  const login = (e) => {
    e.preventDefault();
    auth.login(username);
  };

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <section className="login-section">
      <h1>Login</h1>
      <form onSubmit={login} className="login-form">
        <label>Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export { LoginPage };
