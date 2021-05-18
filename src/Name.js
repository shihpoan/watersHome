import React, { useState } from 'react';

const Name = ()=>{
    const [name, setname] = useState("王瑄好正");
    return(
        <div>
            <button onClick={()=>{setname("王瑄好可愛");console.log("我知道")}}> {name} </button>
        </div>
        
    );
}

export default Name;