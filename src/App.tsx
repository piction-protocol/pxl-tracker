import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route, 
} from 'react-router-dom';
import Navigation from './components/Navigation'
import Transactions from './pages/Transactions'
import Address from './pages/Address'
import About from './pages/About'

import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const NotFound: React.FC = () => (
  <h1>Not Found</h1>
)
const App: React.FC = () => (
  <Router>
    <Navigation />
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={Transactions} />
        <Route path="/address/:id" component={Address} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </AppWrapper>
  </Router>
)

export default App;
