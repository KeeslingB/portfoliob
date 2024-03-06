import github from "../assets/svgs/github-icon-1.svg";
import linkedin from "../assets/linkedin-icon-2.svg";
import indeed from "../assets/gmail-icon.svg";
import Card from "react-bootstrap/Card";


export default function Contact() {

  return (
    <>
    <div className="form">
      <h3 className="contact-header">Contact Me.</h3>
      <Card.Link
            className="project-links"
            href="https://github.com/KeeslingB"
          >
      <img className="svg" src={github} alt="github-logo"/>GitHub.
          </Card.Link>
          <Card.Link
            className="project-links"
            href="https://linkedin.com/in/brendan-keesling"
          >
      <img className="svg" src={linkedin} alt="linkedin-logo"/>Linkedin.
          </Card.Link>
          <Card.Link
            className="project-links"
            href="https://keeslingdev@gmail.com"
          >
      <img className="svg" src={indeed} alt="indeed-logo"/>Indeed.
          </Card.Link>
    </div>
    </>
  )
}