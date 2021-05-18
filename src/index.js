import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from './Layout';
import Name from './Name';
import Parents from './Parents';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <div>
    <Layout>
      <App/>
      <div id="talk"></div>
      <Parents />
    </Layout>
  </div>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
