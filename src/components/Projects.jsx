import Mvc from "../project-components/Mvc";
import Madlibs from "../project-components/Madlibs";
import Gamefinder from "../project-components/Gamefinder";
import SvgLogo from "../project-components/SvgLogo";
import Ecommerce from "../project-components/Ecommerce";
import Employeetracker from "../project-components/EmployeeTracker";



export default function Projects() {
  return (
    <>
    <div className="group-div">
      <h4 className="project-titles">Group.</h4>
      <Mvc />
      <Gamefinder />
      <Madlibs />
    </div>
    <div className="solo-div">
      <h4 className="project-titles">Individual.</h4>
      <Employeetracker />
      <SvgLogo />
      <Ecommerce />
    </div>
    </>
  );
}
