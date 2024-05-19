import React from "react";
const Hero=()=>{
    return(
      <main className="hero container">
       <div className="heroContent">
        <h1>YOUR FEET DSERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="btn">
        <button>Shop Now</button>
        <button className="secbtn">Category</button>
       </div>
       <div className="Shoping"><p>Availabel On</p>
       <div className="brand-icon">
        <img src="shops.svg" alt="" />
       </div></div>
       </div>
       
       <div className="heroImg">
        <img src="shoe_image.svg" alt="" />
       </div>
      </main>
    );
}
export default Hero;