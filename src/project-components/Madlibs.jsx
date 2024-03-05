import Card from "react-bootstrap/Card";

import madlibs from "../assets/madlibs-example.png";
import github from "../assets/svgs/github-icon-1.svg";
import webpage from "../assets/svgs/url-link-svgrepo-com.svg";

/* Tech Logo's Used ---------

import heroku from "../assets/svgs/heroku-svgrepo-com.svg";

*/
export default function Madlibs() {
  return (
    <>
      <Card className="projects-card" style={{ width: "18rem" }}>
        <Card.Img
          className="project-imgs"
          variant="top"
          src={madlibs}
          alt="madlibs-img"
        />
        <Card.Body>
          <Card.Title className="project-title">MadLib's Mania!</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link
            className="project-links"
            href="https://github.com/KeeslingB/madlibs-gpt"
          >
            <img className="svg" src={github} alt="github-svg-logo" />
            <p>GitHub.</p>
          </Card.Link>
          <Card.Link
            className="project-links"
            href="https://madlibsgpt-47c520ae93df.herokuapp.com/"
          >
            <img src={webpage} alt="webpage-site-url" className="svg" />
            <p>Project Page.</p>
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
