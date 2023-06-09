import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <Link to={"/"} className="brand-logo">
          React + TypeScript
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to={"/"}>Список дел</Link>
          </li>
          <li>
            <Link to={"/about"}>Информация</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export {};
