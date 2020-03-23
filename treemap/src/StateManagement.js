import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import Test from './Test'


function StateManagement(props) {
    const [node, setNode] = useState(null)
    
    useEffect(() => {
        if(props.treeMapData !== null){
            if(props.focus !== null){
                
                var node = document.getElementById(props.focus.split(" ")[0])
                setNode(node)
            
                ReactDOM.render(
                    <React.StrictMode>
                      <Test />
                    </React.StrictMode>
                    ,
                    (node)
                  );
            }
        }
        
      }, [props.focus, props.treeMapData]) 


      useEffect(() => {
        console.log("NODE: ",node)
        if(node && (!props.focus)){
            ReactDOM.unmountComponentAtNode(node);
            console.log(props.focus)
            console.log(node.id)
            
        }
        
      }, [node,props.focus])
      
  
    return (
        <div></div>
    )
}
export default StateManagement;
