import Card from "react-bootstrap/Card";
import gamefinder from "../assets/gamefinder.png";


import github from "../assets/svgs/github-icon-1.svg";
import webpage from "../assets/svgs/url-link-svgrepo-com.svg";

export default function Gamefinder() {

  return(
    <>
          <Card className="projects-card" >
        <Card.Img className="project-imgs" variant="top" src={gamefinder} alt="gamefinder-placeholder" />
        <Card.Body>
          <Card.Title className="project-title">GameFinder.</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link
            className="project-links"
            href="https://github.com/KeeslingB/Gamefinder"
          >
            <img className="svg" src={github} alt="github-svg-logo" />
            <p>GitHub.</p>
          </Card.Link>
          <Card.Link
            className="project-links"
            href="https://github.com/KeeslingB/Gamefinder"
          >
            <img src={webpage} alt="webpage-site-url" className="svg" />
            <p>Project Page.</p>
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}