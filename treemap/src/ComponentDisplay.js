import React, {useState, useEffect} from 'react';

function ComponentDisplay(props) {

  const [pageData, setPageData] = useState(null)

  useEffect(() => {
    props.data.treeMapData.children.forEach(element => {
      if(element.name === props.data.botLevel){
        element.children.forEach(page=>{
          if(page.name === props.data.topLevel){
            setPageData(page)
            
          }
        })
      }
    });
  }, [props.data])
  
    return (
      <div className="container-fluid" style={{ marginTop: "80px", height: "100vh"}}>
        
        {(pageData) ? <h1>{pageData.name}</h1>: null}
      </div>
    );
  }
  
  export default ComponentDisplay;