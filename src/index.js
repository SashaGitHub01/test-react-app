import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './lesson1/App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>,
   document.getElementById('root')
);


reportWebVitals();


//https://learn-reactjs.ru/basics/thinking-in-react;