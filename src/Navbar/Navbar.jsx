import { Link } from "react-router-dom";
import StartFreeTrail from "../component/StartFreeTrail";
import   "./module.css"
function Navbar(){
    return(
        <>
        <div className="Navbar">
        <h3 className="top_banner">Enjoy free Shipping on Orders over $24.4</h3>
     <div className="navbar">  
         <div className="left_box">
             <img src="http://cdn.shopify.com/assets/images/logos/shopify-bag.png?1341928631" width="20px" height="20px"/>
             <Link to="/">Shopify</Link>
         </div>
         <div className="middle_box">
             <Link to="/start">Start</Link>
            <Link to="/sell">Sell</Link>
            <Link to="/market">Market</Link>
            <Link to="manage">Manage</Link>
         </div>
         <div className="rigth_box">
             <Link to="/pricing">Pricing</Link>
            <Link to="/learn">Learn</Link>
            <Link to="/login">Log in</Link>
            <Link  to="startfreetrial">
                <StartFreeTrail  length={"130px"}/>
            </Link>
         </div>
     </div>
        </div>
        </>
    )
}
export default Navbar;