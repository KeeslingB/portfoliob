
import umn from "../assets/university-of-minnesota.svg";

export default function Home() {

  return(
    <>
    <div className="home-div">
      <h2>Brendan Keesling.</h2>
      <p>Web Developer Completed a Full-Stack Web-Developement Course through the University of Minnesota.</p>
      <img className="umn-logo"src={umn} alt="university-of-minnesota-logo"/>
    </div>
    </>
  )
}