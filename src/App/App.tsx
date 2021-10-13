import React from 'react';
import './App.css';

import {
  // STATE ACTIONS + ASYNC ACTIONS
} from './appSlice';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { connect } from "react-redux";
import Header from '../Features/Header'
import Footer from '../Features/Footer'

import Home from '../Features/Pages/Home/Home';

const App = (props:any) => {
  return (
    <React.Fragment>   
      <div className="App">
        <Header />

          <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                  <Redirect to="/home" />
              </Route>
            </Switch>
          </Router>

        <Footer />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state : any) => { return { app: state.app, }; }
const mapDispatchToProps = ({ 
  // PROPNAME: (payload : any) => {
  //   return(STATEACTION(payload))
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
