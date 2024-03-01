import {deal} from "../../inputs"
import builder from "../../icons/builder.png"
import "./deals.scss"
export default function Deals(){
    const dealJSX=deal.map((deal)=>{
        return <DealBox deal={deal} key={deal["heading"]}/>
    })
    return(
        <div className="deals">
            <div className="deal-topic">
               Related deals you might like for
            </div>
            <div className="deal-box-wrap">
            {dealJSX}
            </div>
            
        </div>
    )
}


function DealBox({deal}){
    return(
        <div className="deal-box">
            <div className="deal-img">
                <img  src={deal["img src"]!=="#" ? deal["img src"] : builder}alt={"img"} />
            </div>
            <div className="deal-discounts">
                <div className="first-dis">
                    {deal["discount"]}
                </div>
                <div className="second-dis">
                    {deal["discount text"]}
                </div>
            </div>
            <div className="deal-heading">
                  {deal["heading"]}
            </div>
            <div className="deal-about">
            {deal["about"]}
            </div>
            <div className="deal-price">
               <div className="deal-act">{deal["actual price"]}</div>
               <div className="deal-dis">{deal["discounted price"]}</div>
               <div className="deal-off">{deal["off"]}</div>
            </div>
            <div className="deal-btn">
               <button>View Deal</button>
            </div>
        </div>
    )
}