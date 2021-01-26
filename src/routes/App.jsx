import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Mision from '../containers/Mision';
import Vision from '../containers/Vision';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => {
  return (

    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mision" component={Mision} />
          <Route exact path="/vision" component={Vision} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;