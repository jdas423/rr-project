
import Search from "../../icons/search.png"
import {links} from "../../inputs.js"
import './navbar.scss'

export default function Navbar(){
    return(
        <nav className="nav-wrapper">
            <div className="nav-ins-wrap">
                <Searchbar/>
                <NavLinks links={links}/>
            </div>
        </nav>
    )
}


function Searchbar(){
    return(
        <div className="searchbar">
            <div className="search-icon">
               <img src={Search} alt="search" />
            </div>
            <div className="input">
                <input type="text" placeholder="Search..."/>
            </div>
        </div>
    )
}


function NavLinks({links}){
   const linksJsx=[]

   for(let link in links){
        linksJsx.push(
            <li className="nav-link"
            key={link}><a className="link" href={links[link]} >{link}</a></li>
        )
    }
   
    return(
       <ul className="links-wrapper">
          {linksJsx}
       </ul>
    )
}