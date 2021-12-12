import StartFreeTrail from "../component/StartFreeTrail"
import Navbar from "../Navbar/Navbar"
import Footer from "./Footer"

const Home = () => {
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
                <StartFreeTrail length={"260px"} />
            </div>
            <div>
                <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero/en/hero-product@tablet-dcee1276b5e044d7e201cd88922474aa3676c3133222b6946a578f01f5367589.png" width="950px" />
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Home