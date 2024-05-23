import React from 'react'
import Classasd from './Classasd'
// import Functional from './Functional'


class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor")
  }
  componentDidMount() {

    console.log("this is the parent component");
  }

render(){
  console.log("parent render");
  return (
    <div>
      <h1>About</h1>
      <Classasd name={"shivani"} />
      {/* <Functional name1={"varun"}/> */}



      
    </div>
  )
}
}
export default About;
