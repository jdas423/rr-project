
import Navbar from "../components/navbar/Navbar"
import "./home.scss"
import About from "../components/about/About"
import Sublinks from "../components/sublinks/Sublinks"
import Content from "../components/content/Content"
import Deals from "../components/deals/Deals"
import Signup from "../components/signup/Signup"
import Footer from "../components/footer/Footer"
export default function Home() {
    return (
        <main className="main">
            <Navbar/>
            <div className="wrapper">
               <About/>
               <Sublinks/>
               <Content/>
               <Deals/>
               <Signup/>
            </div>
            <Footer/>
        </main>
    )
}