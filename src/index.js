import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { legacy_createStore , applyMiddleware , combineReducers } from 'redux';
import './index.css';
import 'tachyons';
import App from './containers/App'
import { searchRobots , requestRobots } from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots , requestRobots});
const store = legacy_createStore(rootReducer , applyMiddleware(thunkMiddleware,logger));

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<React.StrictMode>
    <Provider  store={store} >     
     <App/>
     </Provider>
     </React.StrictMode>);

// reportWebVitals();

//Redux => Action -(midleware)- Reducer - Store - Make changes!
//packages downloaded -> redux 
//                    -> react-redux
//                    -> redux-logger 
//                    -> redux-thunk 