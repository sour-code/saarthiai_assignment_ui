
import "../App.css";
import { Row, Column } from 'react-foundation';
import React, { Component } from "react";
import {  Redirect } from "react-router-dom";
import Joi from "joi-browser";
import  authService from "../services/authservice";
//import { toast } from "react-toastify";


class login extends Component{
constructor(props){
	super(props)
	this.state={
    hidden:true,
    username:"",
	password:"",
	
}
this.handleSubmit = this.handleSubmit.bind(this);
}

schema=
{
    username: Joi.string().min(3).max(20).required(),
	password: Joi.string().required(),
}

handleuserChange=(event)=> 
{
	this.setState({ username:event.target.value })
}

  
handlepasswordChange=(event)=>
{
	this.setState({ password:event.target.value });
}

  
handleSubmit(event) {
		event.preventDefault();
		this.doSubmit();
		
  }
  
doSubmit = async () => 
	{
		try {
				this.setState({
					hidden:false
				})   
			    const data={ username:this.state.username,
				password :this.state.password
			    }
				await authService.login(data);
				this.setState({
					hidden:true
				})   
				
				this.props.history.push(`/content`)
			
		    }
		 catch (ex) {
			if (ex.response && ex.response.status === 400) 
			{
				alert(`invalid username/password`)
				this.setState({
					hidden:true
				})   
			}
		}
	};

render(){
    
    return (
		
        <div className="centered ">
            	<form onSubmit={this.handleSubmit}>
                <Row>
					<label>username:</label>
				<input
					
						type="text"
						name="username"
						label="username"
						value={this.state.username}
						onChange={this.handleuserChange}
						className={"textbox"}
				/>
				</Row>
				<Row>
				<label>Password: </label>
				<input
					
					type="text"
					name="password"
					label="password"
					value={this.state.password}
					onChange={this.handlepasswordChange}
					className={"textbox"}
				/>
					</Row>
           		<button className={"button"} type="submit">submit</button>
				   {!this.state.hidden && (
                                <div
                                    className="spinner-border text-primary spinner-border-sm spinner_css margin_left"
                                    role="status"
                                ><span className="sr-only">checking for user...</span>
                                </div>
                               )}
				  
            </form>
	
											
        </div>

	)
    
	}

}
export default(login)