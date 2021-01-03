import React,{Component} from 'react'
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import queryform from './components/queryform'
import postanswer from './components/post_answer'
import getanswer from './components/getanswer'
import login from './components/login'
import Nav1 from './components/header'
import home from './components/main'
import querylist from './components/querylist'
import st_querylist from './components/st_querylist'

class App extends Component{
  render(){
    return(
        <BrowserRouter>
          <Nav1 />
           <Route path='/queryform' exact component={queryform} />
           <Route path='/postanswer' exact component={postanswer} />
           <Route path='/getanswer/:id' exact component={getanswer} />
           <Route path='/login' exact component={login} />
           <Route path='/' exact component={home} />
           <Route path='/querylist/' exact component={querylist} />
           <Route path='/st_querylist/' exact component={st_querylist} />
           {/* <Switch>
             <Redirect from='/querylist/:id' to='/getanswer/:id'/>
             <Route path='/getanswer/:id'/>
           </Switch> */}

        </BrowserRouter>
    );
  }

}

export default App;