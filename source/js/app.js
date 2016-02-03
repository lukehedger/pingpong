import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import createBrowserHistory from 'history/lib/createBrowserHistory';

ReactDOM.render(<Root history={createBrowserHistory()} />, document.getElementById('root'));
