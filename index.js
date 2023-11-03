import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import AnotherApp  from './App';  //named export use{appname, a}
// console.log(AnotherApp);
// console.log(a);
//import reportWebVitals from './reportWebVitals';
//lecture 1
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  //lecture2
   //<Another />
   //<AnotherApp/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
