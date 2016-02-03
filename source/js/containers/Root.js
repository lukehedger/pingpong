import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from '../store/configureStore';

// containers
import App from './App';
import League from './League';

const store = configureStore();

export default class Root extends Component {

  render() {

    return (
      <div>
        <Provider store={store}>
          <Router history={this.props.history}>
            <Route path="/" component={App}>
              <IndexRoute component={League} />
              {/*<Route path="/another" component={Another} />*/}
            </Route>
          </Router>
        </Provider>
      </div>
    );

  }

}
