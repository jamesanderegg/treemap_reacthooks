import React, { useEffect, useState } from 'react';
// import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import ComponentDisplay from './components/ComponentDisplay'


function StateManagement(props) {
    const [node, setNode] = useState(null)
    
    // useEffect(() => {
    //     if(props.treeMapData !== null){
    //         if(props.focus !== null){
                
    //             var node = document.getElementById(props.focus.split(" ")[0])
    //             setNode(node)
                
    //             ReactDOM.render(
    //                 <React.StrictMode>
    //                   <ComponentDisplay data={props} />
    //                 </React.StrictMode>
    //                 ,
    //                 (node)
    //               );
    //         }
    //     }
        
    //   }, [props]) 

      useEffect(() => {
        if(props.treeMapData && props.clickData){
          
          if(props.clickData.depth === 2 && props.clickData.height === 1){
            console.log(props)
              var node = document.getElementById(props.clickData.children[0].data.name)
              
              ReactDOM.render(
                  <React.StrictMode>
                    <ComponentDisplay data={props.clickData.data} />
                  </React.StrictMode>
                  ,
                  (node)
                );
            
          }
        }
           
      }, [props])

      useEffect(() => {
        
        // if(node && (!props.focus)){
        //     ReactDOM.unmountComponentAtNode(node);
            
        // }
        
      }, [node,props.focus])
      
  
    return (
        <div className="state-managment"></div>
    )
}
export default StateManagement;
