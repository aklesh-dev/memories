import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware, compose } from 'redux';
import reducers from './reducers';
// import { thunk } from 'redux-thunk';

import App from './App';
import './styles.css';

// const store = configureStore(reducers, compose(applyMiddleware(thunk)))
const store = configureStore({ reducer: reducers });

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);