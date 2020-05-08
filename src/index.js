import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose} from "redux";
import { Provider} from "react-redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from '../src/reducers/root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const globalStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={globalStore}>
      <App />
    </Provider>
, document.getElementById("root"));

serviceWorker.unregister();
