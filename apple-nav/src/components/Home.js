import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="homepage">
           <h1>React-Router-Apple-Nav Project</h1>
            <div className="product-section-main">
                <Link to ="/categories/3"><h4>Mac</h4></Link>
                <p>Arrr me hearties! Make traditional Latin walk the plank and opt for pirate lorem ipsum for your next high seas design adventure.</p>
            </div>
            <div className="product-section-main">
                <Link to = "/categories/1"><h4>iPad</h4></Link>
                <p>Hodor! Hodor hodor, HODOR hodor, hodor hodor... Hodor hodor hodor hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor... Hodor hodor hodor?! </p>
            </div>
            <div className="product-section-main">
                <Link to= "/categories/2"><h4>iPhone</h4></Link>
                <p>You see, in this world there's two kinds of people, my friend: those with loaded guns and those who dig. you dig. you see, in this world there's two kinds of people, my friend: those with loaded guns and those who dig.</p>
            </div>
             <div className="product-section-main">
                <Link to= "/categories/6"><h4>Watch</h4></Link>
                <p>Sea lettuce melon cabbage leek bamboo shoot lettuce rutabaga jícama silver beet amaranth pea dandelion scallion pea sprouts yarrow salsify bitterleaf courgette. Azuki bean horseradish potato kale welsh onion </p>
            </div>
            <div className="product-section-main">
                <Link to = "/categories/5"><h4>TV</h4></Link>
                <p>Leave dead animals as gifts intently sniff hand yet chase imaginary bugs intently sniff hand. Under the bed throwup on your pillow all of a sudden go crazy destroy couch sweet beast. </p>
            </div>
            <div className="product-section-main">
                <Link to = "/categories/4"><h4>Music</h4></Link>
                <p>Knight Foundation Bill Keller afternoon paper I love the Weather & Opera section bloggers in their mother's basement retweet analog thinking crowdsourcing, just across the wire David Cohn mthomps </p>
            </div> 
        </div>
    )
}
        
export default Home