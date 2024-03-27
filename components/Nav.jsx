import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
          }}
        >
          Home
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/projects"
          style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
          }}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-me"
          style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
          }}
        >
          Contact Me
        </NavLink>
      </li> */}
    </ul>
  );
}
