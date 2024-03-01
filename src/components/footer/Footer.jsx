
import "./footer.scss"
import {categories, contact} from "../../inputs.js"
import Expand from "../../icons/expand.png"
export default function Footer(){
    const categoriesJSX= categories.map((category,ind)=>{
        return(
           <li children={ind}>{category}</li>
        )
    })

    const contactJSX= contact.map((contact,ind)=>{
        return(
           <li children={ind}>{contact}</li>
        )
    })

    return(
   <div className="footer">
      <ul className="footer-list1">
        <li>Categories</li>
         {categoriesJSX}
      </ul>
      <ul className="footer-list2">
        <li>Contact</li>
        {contactJSX}
      </ul>
      <div className="country">
          <div>
             United States
          </div>
          <div>
            <img src={Expand} alt="expand" />
          </div>
      </div>
   </div>

    )
}