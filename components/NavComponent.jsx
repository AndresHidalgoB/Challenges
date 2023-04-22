import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom";

export const NavComponent = () => {
    return (
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="active" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      );
};
