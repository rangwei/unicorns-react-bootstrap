import React from 'react';

import Navbar from './Navbar';
import Unicorns from './Unicorns';
import Main from './Main';
import './master.css';

import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Main} />
      <Route path="/unicorns/:page" component={Unicorns} />
    </Router>

  );
}

export default App;
