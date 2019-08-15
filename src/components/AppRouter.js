import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Chat = lazy(() => import('../pages/Chat'));
const FourOhFour = lazy(() => import('../pages/FourOhFour'));

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/chat" component={Chat} />
            <Route component={FourOhFour} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default AppRouter;
