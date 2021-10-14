import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import AppContainer from './containers/AppContainer';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './redux/store';

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <AppContainer />
      </Provider>
   </BrowserRouter>,
   document.getElementById('root')
);

reportWebVitals();


//https://learn-reactjs.ru/basics/thinking-in-react;