import Card from "react-bootstrap/Card";
import orm from "../assets/shopping-backend.png";


import github from "../assets/svgs/github-icon-1.svg";
import webpage from "../assets/svgs/url-link-svgrepo-com.svg";

export default function SvgLogo() {

  return(
    <>
          <Card className="projects-card" style={{ width: "18rem" }}>
        <Card.Img className="project-imgs" variant="top" src={orm} alt="logomaker-placeholder" />
        <Card.Body>
          <Card.Title className="project-title">E Commerce - ORM Backend.</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link
            className="project-links"
            href="https://github.com/KeeslingB/shopping-backend"
          >
            <img className="svg" src={github} alt="github-svg-logo" />
            <p>GitHub.</p>
          </Card.Link>
          <Card.Link
            className="project-links"
            href="https://drive.google.com/file/d/1AUdzz-FQfuE211L6vTiZ2VJFFpmrB6zg/view"
          >
            <img src={webpage} alt="webpage-site-url" className="svg" />
            <p>Walkthrough Video.</p>
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}