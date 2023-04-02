import React, { Component } from "react";

class Description extends Component {
    constructor (props) {
        super();
    }
    render() {
    return (
<>
  <p   style={{margin:30}}>{this.props.about} </p>
    
</>
    )
    }
}



export default Description;