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

  return(
  <div>

    <div>
      <img src="cat01.png" width="40%" height="40%" />
    </div>

    <h1>Name : {name}</h1>
    <h2>Looks : {looks}</h2>
    <p>description :{description}</p>

  </div>
  );

}