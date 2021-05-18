import React, { useState, useEffect } from 'react';
import Baby from './Baby';

const App=()=>{
  const [dad,setDad] = useState("Shih");
  const [born,setBorn] = useState(true);

  const changeDad=()=>{
    if(dad==="Shih"){
      setDad("Liao")
    }
    else{
      setDad("Shih")
    }
  }
  const spawnBaby=()=>{
    if(born===true)
      return <Baby dad={dad} />
  }

  return(
    <div>
      {spawnBaby()}
      <div id="talk"></div>
      <button onClick={changeDad}>換爸爸！</button>
      <button onClick={()=>{setBorn(!born)}}>{(born===true)?"讓他回肚子裡":"讓他生出來"}</button>
    </div>
  );
}

export default App;