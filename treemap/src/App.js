import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import "./stylesheets/App.css"
import TreeMap from './TreeMap'

function App() {

  const [treeMap, setTreeMap] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await d3.json('zoomable.json');
      setTreeMap(result)
    };
    fetchData();
  }, [])

  return (
    <div className="App">
      <TreeMap treeMapData={treeMap} />
    </div>
  );
}

export default App;
