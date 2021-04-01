import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import spcaexProgramReducer from "./reducers/spacex-preogram-reducer";
import spacexProgramSaga from "./sagas/spacex-program-saga"


const allreducers = combineReducers({
    spcaexProgram: spcaexProgramReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    allreducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
// then run the saga
sagaMiddleware.run(spacexProgramSaga)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();