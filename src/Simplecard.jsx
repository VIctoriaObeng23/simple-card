import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import Picture from "./Picture"
import "./App.css";

class Simplecard extends Component {
    render() {
        return (
            <div className="card"> 
             <Picture />
            <div className="container" >  
           <Title className="tit" name="AM A FASHION DESIGNER"/>
           <Description className="des" about="I create original clothing, accessories, and footwear.
            I sketch designs, select fabrics and patterns, 
            and give instructions on how to make the products to be design."
             /> 
            </div>
            </div>
        
        )
    }
}









export default Simplecard;