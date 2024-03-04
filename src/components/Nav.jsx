import {Link} from "react-scroll";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Bio from "./Bio";

export default function Nav(){

  return(
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="home">
              HOME
            </Link>
          </li>
          <li>
            <Link activeclass="active" smooth spy to="projects">
            PROJECTS
            </Link>
            </li>
          <li>
            <Link activeClass="active" smooth spy to="bio">
            BIO
            </Link>
            </li>
          <li>
            <Link activeclass="active" smooth spy to="contact">
            CONTACT
            </Link>
            </li>
        </ul>
      </nav>
    </header>
    <section id="home"><Home/></section>
    <section id="projects"><Projects/></section>
    <section id="bio"><Bio/></section>
    <section id="contact"><Contact/></section>
    </>
  )
}

