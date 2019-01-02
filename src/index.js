import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from "react-router-dom"
import App from './App.jsx'
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from "redux"
import rootReducer from "./store/reducers/rootReducer"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import history from "./history"

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
