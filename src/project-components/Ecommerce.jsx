import Card from "react-bootstrap/Card";
import orm from "../assets/shopping-backend.png";

import github from "../assets/svgs/github-icon-1.svg";
import webpage from "../assets/svgs/url-link-svgrepo-com.svg";

export default function ECommerce() {
  return (
    <>
      <Card className="projects-card" >
        <Card.Img
          className="project-imgs"
          variant="top"
          src={orm}
          alt="logomaker-placeholder"
        />
        <Card.Body>
          <Card.Title className="project-title">
            E Commerce - ORM Backend.
          </Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link
            className="project-links"
            href="https://github.com/KeeslingB/shopping-backend"
          >
            <img className="svg" src={github} alt="github-svg-logo" />GitHub.
          </Card.Link>
          <Card.Link
            className="project-links"
            href="https://drive.google.com/file/d/1AUdzz-FQfuE211L6vTiZ2VJFFpmrB6zg/view"
          >
            <img src={webpage} alt="webpage-site-url" className="svg" /> Walkthrough Video.
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
