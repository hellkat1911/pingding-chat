import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import FourOhFour from '../pages/FourOhFour';

const ChatRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chat} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  )
}

export default ChatRouter;
