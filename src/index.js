import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './lesson1/App';
import { BrowserRouter } from 'react-router-dom'
//import { Provider } from 'react-redux';

import store from './redux/store';


const renderPage = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={store.getState()}
            dispatch={store.dispatch.bind(store)}
         />
      </BrowserRouter>,
      document.getElementById('root')
   );
}

renderPage(store.getState());

store.subscribe(() => renderPage(store.getState()));

reportWebVitals();


//https://learn-reactjs.ru/basics/thinking-in-react;