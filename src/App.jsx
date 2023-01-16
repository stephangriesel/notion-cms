import React, { useEffect, useState } from 'react';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const App = () => {
  const [notionData, setNotionData] = useState(null);

  useEffect(() => {
    const fetchNotionData = async () => {
      const data = await fetch('/api/fetchNotion');
      const allNotionData = await data.json();
      console.log("notion data in app", allNotionData);
      setNotionData(allNotionData);
    }
    const timer = setTimeout(() => {
      fetchNotionData();
    }, 1);

    return () => clearTimeout(timer);
  },[])

  if (!notionData){
    return <div className='App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen text-center'>
      <p>You meant to run that locally? 🤔 </p>
      <p>If you running Netlify functions run: netlify dev</p>
      </div>
  }


  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full">
      <NavBar />
      <CardContainer notionData={notionData}/>
      <Footer />
    </div>
  )
}

export default App
