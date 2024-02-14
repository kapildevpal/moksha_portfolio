import { useEffect, useState, useRef } from "react";
import Card from './Card';

function Companies(){
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const isMountedRef = useRef(false);  
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true; 
      const url = "http://localhost:3000/companies";

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(json => {
          setData(json);
          console.log("response", json);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setError(error);
        });
    }
  }, []); 

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map(item => (
        <div key={item.id} style={{ margin: '10px' }}>
        <Card key={item.id} name={item.name} />  
        </div>
      ))}
    </div>
  );
}

export default Companies;
