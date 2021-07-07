//const User = (props) =>{
   // return (
       // <div>
         //   <h1>{props.name}</h1>
          //  <p>{props.description}</p>
       // </div>
  //  );
//}

import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: "earth",
    };
    console.log("Hey I'm from Constructor");
  }

  componentDidMount() {
    this.setState({ planet: "Jupiter" });
  }

  render() {
    console.log("Hey I'm from render()");
    return (
      <div>
        <h1> {this.props.name} </h1>
        <p> {this.props.description} </p>
        <h4>{this.state.planet}</h4>
      </div>
    );
  }
}



export default User;