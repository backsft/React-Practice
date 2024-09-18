import React, { Fragment } from "react";

export const App = () => {

  return (   

   // <Fragment> </Fragment>
  <>
      <Animals></Animals>
      <Animals/>
      <Animals/>
      <Animals/>

      

 </>   
  );

}


//Create a component 

const Animals = () => {

  const name = "Mr CAT";
  const looks = "Looks Good";
  const description = "The cat (Felis catus), also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal.";
  const fileLocation = "cat01.png";

  let age = 28; 

  return(
  <div>

    <div>
      <img src={fileLocation} width="40%" height="40%" />
    </div>

    <h1>Name : {name}</h1>
    <h2>Looks : {looks}</h2>
    <h3>rating : {5+2.9}</h3>
    <p>description :{description}</p>
    <p>petName :{petName()}</p>
    {/* <button>{age>= 18?"Watch Now": "Not Available"}</button> */}

      {/* Conditionally render the button only when age is 21 or greater */}
      {/* {age >= 21 && <button>Watch Now</button>} */}

    {/* Use custom function to display button based on age */}
    {renderButton(age)}


  </div>
  );

}


// custom function call 

const petName = ()=>{

  const name = "bd Cat"
  return name;

}


// Custom function to render the button based on age
const renderButton = (age) => {
  if (age >= 21) {
    return <button>Watch Now</button>;
  }
  return null; // Don't display anything if age is less than 21
}