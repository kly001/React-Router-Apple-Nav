import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
           <h2>Home Page</h2>
            <div className="product-section-main">
                <Link to ="/mac"><h4>Mac</h4></Link>
                <p>Link to Mac main page</p>
            </div>
            <div className="product-section-main">
                <Link to = "/ipad"><h4>iPad</h4></Link>
                <p>Link to iPad main page</p>
            </div>
            <div className="product-section-main">
                <Link to= "/iphone"><h4>iPhone</h4></Link>
                <p>Link to iPhone main page</p>
            </div>
             <div className="product-section-main">
                <Link to= "watch"><h4>Watch</h4></Link>
                <p>Link to Watch main page</p>
            </div>
            <div className="product-section-main">
                <Link to = "/tv"><h4>TV</h4></Link>
                <p>Link to TV main page</p>
            </div>
            <div className="product-section-main">
                <Link to = "/music"><h4>Music</h4></Link>
                <p>Link to Music main page</p>
            </div>  
        </div>
    )
}
        
export default Home