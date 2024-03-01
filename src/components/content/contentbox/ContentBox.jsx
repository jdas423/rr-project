
import ContentLeft from "./ContentLeft";
import ContentMiddle from "./ContentMiddle";
import ContentRight from "./ContentRight";
import "./contentbox.scss";
export function ContentBox({ content, index }) {
    return (
      <>
        <div className={`content cnt-${index}`} children={index}>
           <ContentLeft content={content}/>
           <ContentMiddle content={content}/>
           <ContentRight content={content}/>     
        </div>
      </>
    );
    }
  
   
  
   
  
  
  