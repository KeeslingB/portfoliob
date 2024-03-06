import Card from "react-bootstrap/Card";
import svg from "../assets/svg-logo.svg";

import github from "../assets/svgs/github-icon-1.svg";
import webpage from "../assets/svgs/url-link-svgrepo-com.svg";

export default function SvgLogo() {
  return (
    <>
      <Card className="projects-card" >
        <Card.Img
          className="project-imgs"
          variant="top"
          src={svg}
          alt="logomaker-placeholder"
        />
        <Card.Body>
          <Card.Title className="project-title">SVG Logo Maker.</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link
            className="project-links"
            href="https://github.com/KeeslingB/svg-logomaker"
          >
            <img className="svg" src={github} alt="github-svg-logo" />GitHub.
          </Card.Link>
          <Card.Link
            className="project-links"
            href="https://drive.google.com/file/d/11X-av3t0YMGLcQC796yI3xYOF42k95dL/view"
          >
            <img src={webpage} alt="webpage-site-url" className="svg" /> Walkthrough Video.
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
