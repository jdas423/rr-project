import Expand from "../../../icons/expand.png";
import Tick from "../../../icons/tick.png";
export default function ContentMiddle({content}){
    return(
        <div className="content-middle">
          <p>
            <span>
              <strong>{content["heading"]}</strong>
            </span>
            <span>-</span>
            <span>{content["about"]}</span>
          </p>
          {content["discount"] ? <div className="discount">{content["discount"]}</div> : null}
          {content["Main Highlights"] ? (
            <>
              <h3 className="highlights">{"Main Highlights"}</h3>
              {content["Main Highlights"]["What you get"] ? (
                <div className="whatyouget">
                  {"[What you get]" + ":" +
                    content["Main Highlights"]["What you get"]}
                </div>
              ) : null}
              {content["Main Highlights"]["ratings"] ? (
                <div>
                  <ul className="highlight-ratings">
                    {Object.keys(content["Main Highlights"]["ratings"]).map(
                      (key, ind) => {
                        console.log(key);
                        return (
                          <li className={`highlight-ratings-${ind}`} children={ind}>
                            <div className="rat"> 
                              <div> {content["Main Highlights"]["ratings"][key]} </div>
                              <div>
                                {key}
                              </div>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              ) : null}
              
              {content["Main Highlights"]["why we love it"] ? (
                <>
                  <div className="loveittext">Why we love it</div>
                  <ul className="loveitbox">
                    {content["Main Highlights"]["why we love it"].map(
                      (con, ind) => {
                        console.log(con)
                        return (
                          <li children={ind} className="loveitli">
                            <div>
                              <div><img src={Tick} alt="tick"/></div>
                              <div>{con}</div>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </>
              ) : null}
            </>
          ) : null}
          {
            <>
              <div className="show">
                <div className="show-text">
                  Show more
                </div>
                {
                content["show more"] !== "" ? 
                <div className="expand">
                    <img src={Expand} alt="expand"/>
                </div>
                 : null
                }
              </div>
            
            </>
            
          }
        </div>
    )
 }