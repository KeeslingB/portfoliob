import Card from "react-bootstrap/Card";
import employee from "../assets/employee-tracker.png";

import github from "../assets/svgs/github-icon-1.svg";
import webpage from "../assets/svgs/url-link-svgrepo-com.svg";

export default function Employeetracker() {
  return (
    <>
      <Card className="projects-card" >
        <Card.Img
          className="project-imgs"
          variant="top"
          src={employee}
          alt="logomaker-placeholder"
        />
        <Card.Body>
          <Card.Title className="project-title">
            Employee Tracker.
          </Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link
            className="project-links"
            href="https://github.com/KeeslingB/employee-tracker"
          >
            <img className="svg" src={github} alt="github-svg-logo" />GitHub.
          </Card.Link>
          <Card.Link
            className="project-links"
            href="https://drive.google.com/file/d/12wkkLMZX5sDQSprDR3G8yTdLjBGZCx7B/view"
          >
            <img src={webpage} alt="webpage-site-url" className="svg" /> Walkthrough Video.
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}