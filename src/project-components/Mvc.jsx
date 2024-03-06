import Card from "react-bootstrap/Card";

import mvc from "../assets/mvc-armory.jpeg";
import github from "../assets/svgs/github-icon-1.svg";
import webpage from "../assets/svgs/url-link-svgrepo-com.svg";

export default function Mvc() {
  return (
    <>
      <Card className="projects-card" >
        <Card.Img className="project-imgs" variant="top" src={mvc} />
        <Card.Body>
          <Card.Title className="project-title">MVC - Armory.</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link
            className="project-links"
            href="https://github.com/KeeslingB/mvc-armory"
          >
            <img className="svg" src={github} alt="github-svg-logo" />GitHub.
          </Card.Link>
          <Card.Link
            className="project-links"
            href="https://github.com/KeeslingB/mvc-armory"
          >
            <img src={webpage} alt="webpage-site-url" className="svg" />Project Page.
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
