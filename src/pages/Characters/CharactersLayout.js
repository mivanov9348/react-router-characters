import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./CharactersLayout.css";

export default function CharactersLayout() {
  return (
    <>
      <div>
        <input />
        <button>Generate Characters</button>
      </div>
      <div className="container">
        <nav>
          <NavLink to="all">Characters</NavLink>
          <NavLink to="warriors">Warriors</NavLink>
          <NavLink to="mages">Mages</NavLink>
          <NavLink to="rogues">Rogues</NavLink>
          <NavLink to="rangers">Rangers</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
