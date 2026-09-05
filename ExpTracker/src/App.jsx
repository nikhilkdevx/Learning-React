import AddExp from './AddExp'
import './App.css'
import ShowExp from './ShowExp'
import { useState } from "react";

function App() {
  let [orgData,setOrgData] = useState([]);

  return (
    <>
      <AddExp setOrgData ={setOrgData} />
      <h5>Total Exp = {orgData.reduce((total,data)=>{
        total = total + Number(data.amount);
        return total;
      },0)}</h5>
      <ShowExp orgData = {orgData}/>
    </>
  )
}

export default App
