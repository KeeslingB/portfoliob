
import Link from "react-scroll";


export default function Nav(){

  return(
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link activeclass="active" smooth={true} spy={true} to="projects">
            PROJECTS
            </Link>
            </li>
          <li>
            <Link activeClass="active" smooth={true} spy={true} to="bio">
            BIO
            </Link>
            </li>
          <li>
            <Link activeclass="active" smooth={true} spy={true} to="contact">
            CONTACT
            </Link>
            </li>
        </ul>
      </nav>
    </header>
    <section id="projects">PROJECTS</section>
    <section id="bio">BIO</section>
    <section id="contact">CONTACT</section>
    </>
  )
}

