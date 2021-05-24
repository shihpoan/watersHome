import React, { useContext } from 'react';
import { FruitContext } from './FruitContext';

function Water(){
    const fruitInfo = useContext(FruitContext);
    return(
        <div classname='water'>
            水水看到了[ {fruitInfo.appleContext} ]個蘋果
            <button onClick={()=>{fruitInfo.setAppleByDispatch({type:'buy',value:1})}}>買一個蘋果</button>
        </div>
    );
}

export default Water;