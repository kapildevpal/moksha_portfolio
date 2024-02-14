 import { useEffect, useState } from "react";
 
function Companies(){
  const [data, setData] = useState([])
//  const url = "https://dummy.restapiexample.com/api/v1/employees"
  const url = "http://localhost:3000/companies"
  useEffect(()=>{
  fetch(url).then(response =>response.json()).then(json =>{
      console.log("responce", json)
      setData(json)
  }).catch(e =>{
    console.log("e",e) 
  })
},[]);
return(

  <>
  {data.map(item =>{
    return(<div>{item.name})</div>)
  })}
  
  
  </>
);


}
export default Companies;
