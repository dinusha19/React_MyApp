
import React,{useState,useEffect} from "react";

const User = (props) => {

  const [planet,setPlanet] = useState("earth");
  
  //componentDidMount
  useEffect(()=>{
     console.log("Component mounting");

    //componentWillUnmount
    return console.log("Bye bye");
  },[]);


  //componentDidUpdate
  //shouldComponentUpdate
  useEffect(()=>{
    console.log("Planet changes");
  },[planet]);


  //the value
  //the function to update the state
    return (
      <div>
        <h1> {props.name} </h1>
        <p> {props.description} </p>
        <button onClick={()=> setPlanet("Pluto")}>{planet}</button>
      </div>
    );
}



export default User;