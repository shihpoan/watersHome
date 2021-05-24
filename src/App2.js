import React, { useState } from 'react';
import ProgressDIY2 from './ProgressDIY2';

const App2=()=>{
    const [value,setValue]=useState(10);
    return(
        <ProgressDIY2 value={value} onClick={(e)=>{setValue(e.target.value)}}/>
    );
}

export default App2;