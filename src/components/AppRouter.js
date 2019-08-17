import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import TopNav from './TopNav';

// Lazy-load app views
const Home = lazy(() => import('../pages/Home'));
const Chat = lazy(() => import('../pages/Chat'));
const FourOhFour = lazy(() => import('../pages/FourOhFour'));

const StyledMain = styled.main`
  background-color: #fff;
  min-height: calc(100vh - 70px);
  position: relative;
`;

const StyledLoader = styled.div`
  font-size: 2.2rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const AppRouter = () => {
  return (
    <Router>
      <TopNav />
      <StyledMain id="pd-main">
        <Suspense fallback={<StyledLoader>Loading...</StyledLoader>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/chat" component={Chat} />
            <Route component={FourOhFour} />
          </Switch>
        </Suspense>
      </StyledMain>
    </Router>
  );
};

export default AppRouter;
