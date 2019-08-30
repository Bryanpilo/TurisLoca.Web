import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/Main Page/App';
import registerServiceWorker from './registerServiceWorker';
//Imports
import { BrowserRouter} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//reducer
import allReducer from './Redux/Reducer';


// ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
    <BrowserRouter basename={'/cbp'}>
            <Provider store={store}>
                <App />
            </Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
