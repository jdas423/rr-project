import { sublinks, rendering } from "../../inputs";
import "./sublinks.scss";

export default function Sublinks(){

    const sublinkJSX=[];
    let pageRenderJSX=[];

    for(let sublink in sublinks)
    {
         sublinkJSX.push(
            <li className="sublink-li"  children={sublink}><a href={sublinks[sublink]}>{sublink}</a></li>
         )
    }

    pageRenderJSX=rendering.map((page,index)=>{
        return(
            <div className="render" children={index}>
                <div className="greater-than">
                    <span>{">"}</span>
                </div>
                <div className="render-text">
                    <a href={"#"} alt={page}>{page}</a>
                </div>
            </div>
        )
    })

    return(
  <div className="sublinks-wrap">
    <div className="upper-sublinks">
       <ul>
        {sublinkJSX}
       </ul> 
    </div>
    <div className="lower-sublinks">
        <div className="lower-sublinks-wrap">
            {pageRenderJSX}
        </div>
    </div>
  </div>

    )

}