import Footer from "./Footer";
import "../Navbar/module.css"
import StartFreeTrail from "../component/StartFreeTrail";
import Navbar from "../Navbar/Navbar";

const Start = () => {
    return(
       <>
       <Navbar />
     <br /><br/><br /><br/><br />
        <div style={{display:"flex"}}>
            <div>
                <h1>The platform commerce is built on</h1>
                <h3>More than a million of the world's most successful
                     brands trust Shopify to sell, ship and process payments anywhere.</h3>
                 <input  className="input_email" placeholder="Enter your Email Address"/><br />   
                <StartFreeTrail  length={"250px"}/>
            </div>
            <div>
  
             <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/pillar/start/testimonial-unbound-merino@desktop-97182b59df3c9fad18d73ebafeb1090fc83a5a3db1ccefb6cd75b94adba27d82.jpg" />
            </div>
        </div>
        <Footer />
       </>

    )
}
export default Start;