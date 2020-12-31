import React,{Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import queryform from './components/queryform'
import postanswer from './components/post_answer'

class App extends Component{
  render(){
    return(
        <BrowserRouter>
           <Route path='/' exact component={queryform} />
           <Route path='/postanswer' exact component={postanswer} />

        </BrowserRouter>
    );
  }

}

export default App;