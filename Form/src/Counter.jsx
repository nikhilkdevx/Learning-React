import { useEffect, useState } from "react";

export default function Counter(){
    let [count,setCount] = useState(0);
    let increaseCount = () =>{
     setCount(currCount => currCount + 1);
    }
    useEffect(function printSomething(){
        console.log("this is side effect");
    },[]);
    return (
        <div>
            <h3>count = {count} </h3>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    );
}