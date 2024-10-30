// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
   const [data, setData] = useState(null);

   useEffect(() => {
      axios.get('/api/data')
         .then(response => {
            setData(response.data.message);
         })
         .catch(error => {
            console.error('Error fetching data:', error);
         });
   }, []);

   return (
      <div className="App">
         <h1>MERN Data Flow</h1>
         <p>{data ? data : "Loading data from server..."}</p>
      </div>
   );
}

export default App;
