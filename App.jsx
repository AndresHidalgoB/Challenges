import "./App.css";
import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { reducer } from "./reducer";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
