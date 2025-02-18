import React from "react";
import Navbar from "../components/partials/navbar";

function productPage(){
    return (
        <div>
            <Navbar />
            <div className="" style={{width: "100%"}}>
                <section>
                    <h1>Red & Black Silk</h1>
                    <h1>PKR 20,000</h1>

                    <h1>Description</h1>
                    <form action="">
                    <label>Fabric</label>
                    <p>Premium Silk</p>
                    <label>Color</label>
                    <input type="radio" id="red" value="Red" />
                    <input type="radio" id="black" value="Black" />
                    <input type="button" value="Add to Cart" />
                    <input type="button" value="Buy Now" />
                    </form>
                </section>
                <section>

                </section>
            </div>
        </div>
        
    );
}

export default productPage;