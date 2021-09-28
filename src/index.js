import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './lesson1/App';
import { BrowserRouter } from 'react-router-dom'

import { store } from './state/state';


const renderPage = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={store.state}
            dispatch={store.dispatch.bind(store)}
         />
      </BrowserRouter>,
      document.getElementById('root')
   );
}

renderPage(store.state);

store.subscribe(renderPage);

reportWebVitals();


//https://learn-reactjs.ru/basics/thinking-in-react;