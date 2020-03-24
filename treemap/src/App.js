import React, { useState, useEffect } from 'react';

import "./stylesheets/App.css"
import TreeMap from './TreeMap'
import pageData from './_pageData'

function App() {

  const [treeMap, setTreeMap] = useState(null);
  
  useEffect(() => {
  
    setTreeMap(pageData[0])
  }, [])

  return (
    <div className="App">
      <TreeMap treeMapData={treeMap} />
    </div>
  );
}

export default App;
