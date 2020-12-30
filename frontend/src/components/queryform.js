import React,{Component} from 'react'

class queryform extends Component{
    render(){
        return(
            <div className="q1">
            
            <div className="container">
            <h2>Submit Your Query</h2>
            <form>
            <label>
            Name:
                <input type="text" name="name" />
            Query:
                <input type="text" name="query" />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
        )
    }
}

export default queryform;