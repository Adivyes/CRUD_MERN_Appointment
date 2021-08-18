import React from 'react'
import { Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Home from '../Pages/home/home';
import Login from '../Pages/login/Login';
import Memories from '../Pages/memories/Memories';


export default function RouterPages() {
    return (
        <Router>
            <div> 
                <Switch>
                <Route exact path = "/"><Home/></Route>  
                <Route path ="/login"><Login/></Route>  
                <Route path = "/memories"><Memories/></Route>    
                </Switch>
            </div>
        </Router>
        
    )
}
