import React, { Component } from "react";
import axios from "axios";

class queryform extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            query: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.getAttribute("name")]: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        
        console.log(this.state);
        axios({
            url:"http://127.0.0.1:8000/submitquery/",
            method:"POST",
            data:this.state,
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response=>{
                console.log(response)
            })
            .catch(err=>{   
                console.log(err);
            })
        }
        
  render() {
    return (
      <div className="container">
        <h2>Submit Your Query</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Query:
            <input type="text" name="query" value={this.state.query} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" className="btn-primary"/>
        </form>
      </div>
    );
  }
}

export default queryform;
