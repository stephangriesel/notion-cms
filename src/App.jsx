import React, {useEffect} from 'react';
import CardContainer from './components/CardContainer';

function App() {

  useEffect(() => {
    async function fetchDataFromAPIEndpoint(){
      const cards = await fetch('/api/fetchNotion')
      .then((res) => res.json()
      .then((data) => console.log("check data results",data.results)))
    }
    fetchDataFromAPIEndpoint()
  })


  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <CardContainer />
    </div>
  )
}

export default App
