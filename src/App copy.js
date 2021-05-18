import React from 'react';
import Baby from './Baby';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rate:"",
      name:true, //加入name; member Data
    }
    this.changeName = this.changeName.bind(this);
    this.spawnBaby = this.spawnBaby.bind(this);
  }
changeName(){ //定義changeName
  this.setState({name:!this.state.name})
  console.log("我知道")
}
spawnBaby(){
  if(this.state.name)
    return <Baby/>
}


  render(){
    return(
      <div>
        <button onClick={this.changeName}> {(this.state.name===true)?"王瑄好正":"王瑄好可愛"} </button>
        {this.spawnBaby()}
      </div>
    );
  }
}

export default App;
