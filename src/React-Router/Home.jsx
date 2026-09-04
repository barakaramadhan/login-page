import React from "react";
import { Link, NavLink } from "react-router";

function Home() {
  return (
    <>
      <nav>
        <NavLink to="/home">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Profile
        </NavLink>
      </nav>

      <p>Home</p>

      <Link to="/about">About</Link>

      <a target="_blank" rel="noopener noreferrer" href="https://youtube.com">
        Profile
      </a>
    </>
  );
}

export default Home;
