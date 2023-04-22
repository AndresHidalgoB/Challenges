import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    // Hacemos la petición al servidor de autenticación
    // Simulamos una autenticación exitosa con credenciales hardcoded
    if (username === "user" && password === "password") {
      dispatch({ type: "LOGIN" });
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
