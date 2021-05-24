import React,{ useState, useEffect, useRef, useReducer} from 'react'; //引入useState、useEffect、useRef，不用引入component(2)
const ProgressDIY=(props)=>{ //做好ProgressDIY.js的基本架構(1)
    //用useState建立控制目前的寬度的state和setState函式(3)
    const [percent, setPercent]=useState(10);

    //在useEffect中，搭配useRef去紀錄是否為第一次渲染，讓第一次和非第一次渲染可以做不同的事。(5)
    const mounted=useRef();
    //創建用來存setTimeout的變數(7)
    const tm = useRef();
    const tmTwo = useRef();

    useEffect(()=>{ 
        if(!mounted.current){ //componentDidMount
            setPercent(props.value); //在第一次渲染的定義區中完成初始化(6)
            mounted.current=true;
        }
        else{ //componentDidUpdate}
            if(percent>props.value){
                if(tm.current)
                    clearTimeout(tm.current)
                tmTwo.current=setTimeout(()=>{setPercent(percent-1)},20);
            }
            else if(percent<props.value){
                if(tmTwo.current)
                    clearTimeout(tmTwo.current)
                tm.current=setTimeout(()=>{setPercent(percent+1)},20);
            }

        }
    },[props.value,percent]);


    return(
        // 在return()中弄出進度條跟按鍵的元素(4)
        <div>
            <div className="progress-back" style={{backgroundColor:'rgba(0,0,0,0.2)', width:'200px', height:'7px', borderRadius:'10px'}}>
                <div className='progress-bar' style={{backgroundColor:'aqua', width:percent.toString()+'%', height:'100%', borderRadius:'10px'}}></div>
            </div>
            目前比率: {percent}%
            <button value={90} onClick={props.onClick}>增加比率至90</button>
            <button value={10} onClick={props.onClick}>減少比率至10</button>
        </div>
    )
}
export default ProgressDIY;