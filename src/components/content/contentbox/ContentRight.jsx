import Star1 from "../../../icons/star1.png"
import Star2 from "../../../icons/star2.png"
import Star3 from "../../../icons/star3.png"
import Star4 from "../../../icons/star4.png"


export default  function ContentRight({content}){

    function img(){

        if(content["review src"]==="star1.png") return Star1;
        else if(content["review src"]==="star2.png") return Star2;
        else if(content["review src"]==="star3.png") return Star3;
        else if(content["review src"]==="star4.png") return Star4;
    }


    return(
        <div className="content-right">
            <div className="rating-right">
                <div className="rating">
                   {content["rating"]}
                </div>
                <div className="reviews">
                  {content["reviews"]}
                </div>
                <div className="star">
                  <img src={img()} alt="review"/>
                </div>
            </div>
            <div className="right-btn">
                <button>View</button>
            </div>
        </div>
    )
 }