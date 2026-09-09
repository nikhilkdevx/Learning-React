import { useState } from "react";
import ExpCard from "./ExpCard";

export default function ShowExp({orgData}){
    const [selectedCategory,setSelectedCategory] = useState("");
    let handleFilterChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    const filterdData = selectedCategory === "" ? orgData :
        orgData.filter(expense => expense.category === selectedCategory);
    return (
        <>
            <h5>Filter &nbsp;&nbsp;
                <select onChange={handleFilterChange}>
                    <option value={""} >By Category</option>
                    <option value={"Food"} >Food</option>
                    <option value={"Travel"} >Travel</option>
                    <option value={"Shopping"}>Shopping</option>
                    <option value={"Bills"}  >Bills</option>
                </select>
            </h5>
           {filterdData.map((expense)=>{
            return <ExpCard expense= {expense} key = {expense.id}/>
           })}
        </>
    );
}