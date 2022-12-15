import React, { useEffect, useState } from 'react';
import CardContainer from './components/CardContainer';

function App() {
  let [notionData, setNotionData] = useState(null);

  useEffect(() => {
    fetch('/api/fetchNotion')
    .then((res) => res.json()
    .then((data) => console.log("check data results", data.results)))
  })


  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <CardContainer />
    </div>
  )
}

export default App
