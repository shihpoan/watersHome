import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from './Layout';
import Parents from './Parents';
import FruitStore from './FruitStore';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';



ReactDOM.render(
  <div>
    <Layout>
      <div id='big_div' style={{width:'600px',margin:'0 auto',backgroundColor:'antiquewhite'}}>
        <div id='header' style={{width:'600px', height:'90 px', fontSize:'20px', color:'aqua', backgroundColor:'rgb(208, 171, 243)', lineHeight:'90px', textAlign:'center'}}>水水的零用錢</div>
        <div id='side1' style={{width:'120px', height:'400px', backgroundColor:'rgb(240, 217, 167)', lineHeight:'400px', textAlign:'center', float:'left'}}></div>
        <div id='side2' style={{width:'120px', height:'400px', backgroundColor:'rgb(240, 217, 167)', lineHeight:'400px', textAlign:'center', float:'right'}}></div>
        <div id='content' style={{height:'400px', lineHeight:'40px', textAlign:'center', backgroundColor:'rgb(72, 5, 78)', color:'aqua'}}>
          <App/>
          <div id="talk"></div>
          <Parents /> 
          <FruitStore />
        </div>
        <div id='base' style={{height:'100px',backgroundColor:'rosybrown'}}>
          <App2/>
        </div>
      </div>
    </Layout>
  </div>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();