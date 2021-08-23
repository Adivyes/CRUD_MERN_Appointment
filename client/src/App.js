import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {

    return (
    <BrowserRouter>
       <Container maxWidth="lg">

        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact  path="/auth" component={Auth}/>
            </Switch>
            
       </Container>
    </BrowserRouter>
    )
}
export default App;