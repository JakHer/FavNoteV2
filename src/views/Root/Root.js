import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Articles from 'views/Articles';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route
          path="/twitters"
          component={Twitters}
        />
        <Route
          path="/articles"
          component={Articles}
        />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
