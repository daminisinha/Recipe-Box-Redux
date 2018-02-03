import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import recipeMaster from './reducers';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(recipeMaster);
render(
<Provider store={store}>
<App /></Provider>
, document.getElementById('root'));
registerServiceWorker();
