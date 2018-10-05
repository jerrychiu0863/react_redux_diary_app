import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

render();
store.subscribe(render);