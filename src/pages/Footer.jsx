import { Link } from "react-router-dom";
// import "../Navbar/module.css"
const Footer = () => {
    return (
       <div className="footer">
           <div className="heading_footer">
               <h3>About</h3>
               <h3>Careers</h3>
               <h3>Press and Media</h3>
               <h3>Shopify Plus</h3>
               <h3>Sitemap</h3>
           </div>
           <p className="line"></p>
           <div>
              <table className="table">
                  <tr>
                      <th>ONLINE STORE</th>
                      <th></th>
                      <th></th>
                      <th>POINT OF SALE</th>
                      <th>SUPPORT</th>
                      <th>SHOPIFY</th>
                  </tr>
                  <tr>
                      <td><Link to="/sellonline">Sell Online</Link></td>
                      <td><Link to="/domain name">Domain name</Link></td>
                      <td><Link to="/online store builder">Online store builder</Link></td>
                      <td><Link to="/point of sale">Point of sale</Link></td>
                      <td><Link to="/24/7 support">24/7 support</Link></td>
                      <td><Link to="contact">Contact</Link></td>
                  </tr>
                  <tr>
                      <td><Link to="/features">Features</Link></td>
                      <td><Link to="/themes">Themes</Link></td>
                      <td><Link to="/oberlo">Oberlo</Link></td>
                      <td><Link to="/Features">Features</Link></td>
                      <td><Link to="Shopify Help Center">Shopify Help Center</Link></td>
                      <td><Link to="partner program">Partner program</Link></td>
                  </tr>
                  <tr>
                  <td><Link to="/examples">Examples</Link></td>
                      <td><Link to="/shopping cart">Shopping cart</Link></td>
                      <td><Link to="dropshipping business">Dropshipping Business</Link></td>
                      <td><Link to="/dropshipping business">Hardware</Link></td>
                      <td><Link to="/Shopify Community">Shopify Community</Link></td>
                      <td><Link to="/Affiliate program">Affiliate program</Link></td>
                  </tr>
                  <tr>
                     <td><Link to="/website editor">Website editor</Link></td>
                     <td><Link to="/ecommerce hosting">Ecommerce hosting</Link></td>
                      <td><Link to="/store themes">Store themes</Link></td>
                      <td></td>
                      <td><Link to="/Api documentation">Api documentation</Link></td>
                      <td><Link to="App developers">App developers</Link></td>
                  </tr>
                  <tr>
                  <td><Link to="/online retail">Online retail</Link></td>
                  <td><Link to="/mobile commerce">Mobile commerce</Link></td>
                      <td></td>
                      <td></td>
                      <td><Link to="Free tools">Free tools</Link></td>
                      <td><Link to="Investors">Investors</Link></td>
                  </tr>
                  <tr>
                  <td><Link to="/ecommerce Website">Ecommerce Website</Link></td>
                  <td><Link to="/ecommerce software">Ecommerce software</Link></td>
                      <td></td>
                      <td></td>
                      <td><Link to="Free stock photos">Free stock photos</Link></td>
                      <td><Link to="blog topics">Blog topics</Link></td>
                  </tr>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><Link to="/website for sale">Website for sale</Link></td>
                      <td><Link to="/community events">Community Events</Link></td>
                  </tr>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><Link to="/Logo maker">Logo Maker</Link></td>
                      <td></td>
                  </tr>
                  <tr> 
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><Link to="/Business name generator">Business name generator</Link></td>
                      <td></td>
                  </tr>
              </table>
                   <p className="line"></p>
           </div>
           <div className="img_box">
               <img src="data:image/png;base64,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" width="30px" height="30px"/>
               <img src="https://blog.addthiscdn.com/wp-content/uploads/2015/11/twitter-452x372.jpg"  width="30px" height="30px"/>
               <img src="data:image/png;base64,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"  width="30px" height="30px"/>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"  width="30px" height="30px"/>
               <img src="data:image/png;base64,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"  width="30px" height="30px"/>
               <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"  width="30px" height="30px"/>
               <div className="last_box_footer">
                   <h3><Link to="/terms of service">Terms of Service</Link> </h3>
                   <h3><Link to="/privacy policy">Privacy Policy</Link></h3>
                   <h3><Link to="/google.usa">USA</Link></h3>
               </div>
           </div>
       </div>
    )
}
export default Footer;