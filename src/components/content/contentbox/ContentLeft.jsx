
import builder from "../../../icons/builder.png";

export default function ContentLeft({content}){
    return(
        <div className="content-left">
        <div>
          <img src={content["img src"]!=="#" ? content["img src"] : builder} alt={content["img text"]} />
        </div>
        <div className="img-text">{content["img text"]}</div>
      </div>
    )
  }


