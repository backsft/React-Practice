export const Practices = () =>{

 //   return <h1>Interview</h1>;

    const students = [1];
    
    return(
    <>
    
    <p>{!students.length && "No of Students found"}</p>

    {/* <p>{students.length ===0 && "No of Students found"}</p> */}

    <p>Number of Students : {students.length}</p>

    </>
    );

}

