import React, { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:5000/members`)
    setData(response.data);
  }
  useEffect(() => {
    fetchData();
    console.log(data)
  }, [])
  return (
    <div className="App">
      <h1>Welcome to Python-React app</h1>

      {data.members.length > 0 ? data.members.map((item, index) => <li key={index}>{item}</li>) : ""}

    </div>
  );
}

export default App;
