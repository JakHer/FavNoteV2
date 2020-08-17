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
import wrongPath from 'routes/wrongPath';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'store';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import PrivateRoute from 'routes/PrivateRoute';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const Root = () => (
  <Provider history={history} store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route
            exact
            path={routes.login}
            component={LoginPage}
            loginPage
          />
          <Route
            exact
            path={routes.register}
            component={RegisterPage}
            loginPage
          />
          <PrivateRoute
            exact
            path={routes.home}
            render={() => (
              <Redirect to={routes.notes} />
            )}
          />
          <PrivateRoute
            exact
            path={routes.notes}
            component={Notes}
          />
          <PrivateRoute
            path={routes.note}
            component={DetailsPage}
          />
          <PrivateRoute
            exact
            path={routes.twitters}
            component={Twitters}
          />
          <PrivateRoute
            path={routes.twitter}
            component={DetailsPage}
          />
          <PrivateRoute
            exact
            path={routes.articles}
            component={Articles}
          />
          <PrivateRoute
            path={routes.article}
            component={DetailsPage}
          />
          <Route component={wrongPath} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
