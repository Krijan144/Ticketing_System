import React,{Component} from 'react';
import axios from 'axios'

class register extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        handleSubmit(event){
            event.preventDefault();
            axios({
                url:"",
                method:"POST",
                data:this.state,
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(response=>{
                console.log(response)
            }).catech(err=>{
                console.log(err)
            })

        }
        handleChange(event){
            this.setState({[event.target.getAttribute("name")]:event.target.value});
        }



    render(){
        return(
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:<br/>
                    <input type ="text" name="username" value={this.state.username} onChange={this.handleChange}/><br/>
                    Email:<br/>
                    <input type ="text" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                    Password:<br/>
                    <input type ="text" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
                    Confirm Password:<br/>
                    <input type ="text" name="password" value={this.state.con_password} onChange={this.handleChange}/><br/>
                </label><br/>
                <input type="submit" value="REGISTER" className="btn-primary"/>
            </form>
            </div>
        )
    }
}
export default register