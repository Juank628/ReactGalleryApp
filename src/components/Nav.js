import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/gifs/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/gifs/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/gifs/computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
}
