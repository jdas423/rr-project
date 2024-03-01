import { about } from "../../inputs";
import Updated from "../../icons/updated.png";
import Add from "../../icons/add.png";
import Expand from "../../icons/expand.png";
import "./about.scss";

export default function About() {
  return (
    <main className="about">
      <div className="upper-box">
        <h1>{about["topic name"]}</h1>
      </div>
      <div className="lower-box">
        <Left about={about} />
        <Right about={about} />
      </div>
    </main>
  );
}


function Left({about}){
  return(
    <div className="left">
    <div className="updated">
      <img src={Updated} alt="updated" />
      <div>Last Updated</div>
    </div>
    <div className="hypen">-</div>
    <div className="update-date">{about["update date"]}</div>
    <div className="add">
      <img src={Add} alt="add" />
      <div>
        <a href={about["Disclosure date link"]}>Advertising Disclosure</a>
      </div>
    </div>
  </div>
  )
}

function Right({about}){
  return(
    <div className="right">
    <div className="expand">
      <div>Top Relevant</div>
      <img src={Expand} alt="expand" />
    </div>
  </div>
  )
}
