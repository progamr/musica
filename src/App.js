import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Router as BaseRouter, Switch,
} from 'react-router-dom';
import history from './utils/browser-history';
import {Login, Register} from './routes';
import  Routes from './routes';
import  RestrictedRoutes from './components/RestrictedRoutes';
import store from './store';

function App() {

    const authToken = 'null';

  return (
      <Provider store={store}>
          <BaseRouter history={history}>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <RestrictedRoutes path="/" authToken={authToken} component={Routes}/>
            </Switch>
          </BaseRouter>
      </Provider>
  );
}

export default App;
