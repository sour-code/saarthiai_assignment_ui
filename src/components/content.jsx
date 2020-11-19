
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import  authService from "../services/authservice";
import { Row, Column } from 'react-foundation';

import "../App.css"

class content extends Component{
    constructor(props){
        super(props)
        this.state={
            hidden: true,
            url:'',
            html:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
  
    }

handlechange=(event)=>{
    this.setState({ url:event.target.value })
    

}

handleSubmit(event) {
	console.log("did")
    event.preventDefault();
    this.doSubmit();
  }
  
	doSubmit = async () => {
		try {
			 this.setState({
                 hidden:false
             })
			const data={ url:this.state.url}
				
        const returned_data=await authService.content(data);
       // console.log(returned_data.data)
        this.props.history.push({
            pathname: '/display',
            state: {data:returned_data.data,url:this.state.url},
          })
          // console.log(returned_data)
        this.setState({html:returned_data.data})
        this.setState({
            hidden:true
        })
       
			
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
                this.setState({
                    hidden:true
                })
                alert(`url cannot be empty`)
              
            }
            if (ex.response && ex.response.status === 500) {
                this.setState({
                    hidden:true
                })
                alert(`Problem occured while fetching data,please recheck the url!!`)

            }
		}
	};

    render(){

        return(

  
        <div className={"centered"}>
        <form onSubmit={this.handleSubmit}>
              <Row> 
                <label>
                        url
                </label>
                <input  
                        type="text" 
                        name="url"
                        label="url"
                        value={this.state.url} 
                        onChange={this.handlechange}
                        className={"textbox"}>
                      

                </input>

                </Row>
                <button type="submit"   className={"button"}>submit</button>
        </form>
        {!this.state.hidden && (
                                <div
                                    className="spinner-border text-primary spinner-border-sm spinner_css"
                                    role="status"
                                ><span className="sr-only">Loading...</span>
                                </div>
                               )}

        <div >  
        
     

        </div>
      
        </div>
        

        

        )
    }


}
export default content