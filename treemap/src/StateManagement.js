import React, { useEffect, useState } from 'react';
// import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import ComponentDisplay from './ComponentDisplay'


function StateManagement(props) {
    const [node, setNode] = useState(null)
    
    useEffect(() => {
        if(props.treeMapData !== null){
            if(props.focus !== null){
                
                var node = document.getElementById(props.focus.split(" ")[0])
                setNode(node)
                
                ReactDOM.render(
                    <React.StrictMode>
                      <ComponentDisplay data={props} />
                    </React.StrictMode>
                    ,
                    (node)
                  );
            }
        }
        
      }, [props]) 


      useEffect(() => {
        
        if(node && (!props.focus)){
            ReactDOM.unmountComponentAtNode(node);
            
        }
        
      }, [node,props.focus])
      
  
    return (
        <div className="state-managment"></div>
    )
}
export default StateManagement;
