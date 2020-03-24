import React, {useState, useEffect} from 'react';

function ComponentDisplay(props) {

  

  useEffect(() => {
    console.log(props)
    
  }, [props])
  
    return (
      <div className="container-fluid" style={{ marginTop: "80px", height: "100vh" }}>
        <h4>{props.data.name}</h4>
        {props.data.component}
      </div>
    );
  }
  
  export default ComponentDisplay;