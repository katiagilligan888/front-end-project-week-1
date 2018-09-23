import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(() => {});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
