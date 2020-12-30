import React,{Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import queryform from './components/queryform'

class App extends Component{
  render(){
    return(
        <BrowserRouter>
           <Route path='/' exact component={queryform} />
        </BrowserRouter>
    );
  }

}

export default App;