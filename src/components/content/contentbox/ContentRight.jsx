
export default  function ContentRight({content}){
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
                  <img src={content["review src"]} alt="review"/>
                </div>
            </div>
            <div className="right-btn">
                <button>View</button>
            </div>
        </div>
    )
 }