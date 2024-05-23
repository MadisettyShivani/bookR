import React from 'react'

class Classasd extends React.Component{
  constructor(props){
    super(props);
    console.log("children constuctor")
    this.state ={
      count:0
    };
  }
  componentDidMount(){
    console.log("this is child componentDIdMount")
  }
  render(){
    console.log("child render")
    const {name} = this.props;
      const {count} = this.state;
    return(
      <>
      <h1>this is the class based component</h1>
      <h1>count:{count}</h1>
       <button 
       onClick={()=>{
        this.setState({
          count: this.state.count + 1,
        })
      }
      }>+</button>
      <span>some</span>
       <button 
       onClick={()=>{
        this.setState({
          count: this.state.count - 1,
        })
      }
      }>- </button>
      <h1>{name}</h1>
       
        </> 
    );
  }
}
export default Classasd;