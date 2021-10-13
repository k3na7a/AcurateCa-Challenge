import React from 'react';

import {
    Switch,
    Route,
    Redirect,
    useRouteMatch
  } from 'react-router-dom';

import AboutPage from './Features/AboutPage';

const Home = (props: any) => {
    let match = useRouteMatch();
    return (
        <React.Fragment> 
            <Switch>
              <Route path={`${match.path}/about`}>
                <AboutPage />
              </Route>
              <Route path="/">
                  <Redirect to={`${match.path}/about`} />
              </Route>
            </Switch>
        </React.Fragment> 
    )
}
export default Home;