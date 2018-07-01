import React from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Landing from '../Layout/Landing';
import CreateTeam from '../Teams/CreateTeam';
import ListTeams from '../Teams/ListTeams'
const App = () => (
  <HashRouter>
      <div>
    <Header/>
        <Route exact path ="/" component={Landing}/>
        <Route path="/CreateTeam" component={CreateTeam}/>
        <Route path="/ListTeams" component={ListTeams}/>
        <Footer/>
      </div>
  </HashRouter>
);

export default App;
