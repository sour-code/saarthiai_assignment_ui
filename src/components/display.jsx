import "../App.css";
import { Row, Column } from 'react-foundation';
import React, { Component } from "react";
import {  Redirect } from "react-router-dom";



class display extends Component{
    constructor(props){
        super(props)

        this.state={
            data:'',
           }
                  
}
  

    render(){
      
        const print=this.props.location.state.data
     //   console.log(print)
     
        return(
            <div>

        <div >
            <h3> Html response of " {this.props.location.state.url} " is: </h3>
          </div>
          <div> 
         <p>`{print}`  </p> 
        </div>
        </div>
     )
}
}

export default display