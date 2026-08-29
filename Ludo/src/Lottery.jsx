import { useState } from "react";
import { genTicket } from "./helper";
import { sum } from "./helper";
import Ticket from "./Ticket";
 
export default function Lottery({n = 3,winCondition}){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinnig = winCondition(ticket); 
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game! </h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinnig && "Congrats,You Won !"}</h3>
            
        </div>
    );
}