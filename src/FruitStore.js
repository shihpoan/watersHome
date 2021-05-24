import React, {useReducer, useState} from 'react';
import { act } from 'react-dom/test-utils';
import {FruitContext} from './FruitContext.js';
import Water from './Water';

function FruitStore(){
    function reducer(state, action){
        switch(action.type){
            case 'buy':
                return state - action.value;
            case 'sell':
                return state + action.value;
            default:
                throw new Error();
        }
    }
    const [appleState, appleDispatch] = useReducer(reducer, 3);
    // const [apple, setApple] = useState(1);
    return(
        <div>
            <div className='FruitStore'>目前水果店有 [ {appleState} ] 個蘋果</div>
            <FruitContext.Provider value={{
                appleContext: appleState,
                setAppleByDispatch: appleDispatch,
                }}>
                <Water />
            </FruitContext.Provider>
        </div>
    );
}

export default FruitStore;