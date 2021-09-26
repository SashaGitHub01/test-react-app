import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './lesson1/App';
import { BrowserRouter } from 'react-router-dom'

let posts = [
   {
      id: 1,
      name: 'Jake Yip',
      avatar: 'https://steamuserimages-a.akamaihd.net/ugc/793116473828215611/6B7BC238A031EE48EC9CDC44AC369EF30536F881/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
      body: 'Hello, I\'m Jake!'
   },
   {
      id: 2,
      name: 'Jake Yip',
      avatar: 'https://steamuserimages-a.akamaihd.net/ugc/793116473828215611/6B7BC238A031EE48EC9CDC44AC369EF30536F881/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
      body: 'Hahahaha'
   },

   {
      id: 3,
      name: 'Jake Yip',
      avatar: 'https://steamuserimages-a.akamaihd.net/ugc/793116473828215611/6B7BC238A031EE48EC9CDC44AC369EF30536F881/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
      body: 'Nice!!! lol...'
   },

];


let dialogs = [
   {
      name: 'Stew',
      surname: 'Yip',
      id: 1,
      avatar: '',
   },

   {
      name: 'Jake',
      surname: 'Runnyn',
      id: 2,
      avatar: '',
   },

   {
      name: 'Johny',
      surname: 'Bruhman',
      id: 3,
      avatar: '',
   },

   {
      name: 'Freddy',
      surname: 'Groover',
      id: 4,
      avatar: '',
   },
];






ReactDOM.render(
   <BrowserRouter>
      <App posts={posts} dialogs={dialogs} />
   </BrowserRouter>,
   document.getElementById('root')
);


reportWebVitals();


//https://learn-reactjs.ru/basics/thinking-in-react;