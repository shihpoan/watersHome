import React, { Component } from 'react';
import Grandson from './Grandson';
class Brother extends Component{
    constructor(props){
        super(props);
        this.state={
            feeling:'?',
            exceptAmount: 40,
        }
        this.setMyFeeling=this.setMyFeeling.bind(this);
    }

    setMyFeeling(){
        if(this.props.money<this.state.exceptAmount)
            this.setState({feeling:'幹！太少了'})
        else
            this.setState({feeling:'ok'})
        // this.props.argue("brother",this.state.exceptAmount);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.money!==this.props.money){
            this.setMyFeeling();
        }
    }

    render(){
        return(
            <div>
                <div>我是水水，我拿到{this.props.money}，{this.state.feeling}</div>
                <Grandson {...this.props}/>
            </div>
        );
    }
}
export default Brother;