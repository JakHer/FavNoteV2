import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Articles from 'views/Articles';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'store';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route
            exact
            path={routes.login}
            component={LoginPage}
          />
          <Route
            exact
            path={routes.register}
            component={RegisterPage}
          />
          <Route
            exact
            path={routes.home}
            render={() => (
              <Redirect to={routes.notes} />
            )}
          />
          <Route
            exact
            path={routes.notes}
            component={Notes}
          />
          <Route
            path={routes.note}
            component={DetailsPage}
          />
          <Route
            exact
            path={routes.twitters}
            component={Twitters}
          />
          <Route
            path={routes.twitter}
            component={DetailsPage}
          />
          <Route
            exact
            path={routes.articles}
            component={Articles}
          />
          <Route
            path={routes.article}
            component={DetailsPage}
          />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
