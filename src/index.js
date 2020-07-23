import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// // import serviceWorker from './serviceWorker';
require('./ably');

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();