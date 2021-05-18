import React,{ Component } from 'react';
import Brother from './Brother';
import Sister from './Sister';

class Parents extends Component{
    constructor(props){
        super(props);
        this.state={
        moneyForBrother:60,
        moneyForSister:40,
        }
        this.allocateMoney = this.allocateMoney.bind(this);
    }

    allocateMoney(target,amount){
        if(target==='brother'){
            this.setState({moneyForBrother:amount})
        }
        else{
            this.setState({moneyForSister:amount});
            this.setState({moneyForBrother:100-amount});
        }
    }

    render(){
        return(
            <div>
              <Brother money={this.state.moneyForBrother} argue={this.allocateMoney} />
              <Sister money={this.state.moneyForSister} argue={this.allocateMoney} />
            </div>
        );
    }
}
export default Parents;