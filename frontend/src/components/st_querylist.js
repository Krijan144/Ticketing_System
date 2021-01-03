import React,{Component} from 'react';
import axios from 'axios';

class st_querylist extends Component{
    constructor(props){
        super(props);
        this.state={
            st_query=[]
        };
        this.handleClick = this.handleClick.bind(this);
        
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/getquery')
        .then(res =>
            {
                console.log(res);
                const query = res.data;
                this.setState({query})
            }
            )
    }
    render(){
        return(
            <div className="container p-4">
                <ul>
                    {this.state.query.map(querylist => <li><Link to ={`/postanswer/`}>{querylist.query}</Link> </li>)}
                </ul>
            </div>
        )
    }
}
export default st_querylist;