import { useState } from "react";

export default function AddExp(){
    let [orgData,setOrgData] = useState([]);
    
    let[expenseData,setExpenseData] = useState({
        expense : "",
        amount : "",
        category : "",
        date: "",
    });

    console.log(orgData);

    let handleInputChange = (event) => {
        const {name,value} = event.target;

        setExpenseData((currData) => ({
            ...currData,
            [name]: value,
        }));
    }
    
    let saveExpData = (event) => {
        event.preventDefault();
        setOrgData([...orgData,expenseData]);
        console.log(expenseData);
        setExpenseData({
        expense : "",
        amount : "",
        category : "",
        date: "",
        });
        
        
    }
    
    return (
        <div>
            <form onSubmit={saveExpData}>

                <label htmlFor="expense">Expense Name : </label>
                &nbsp;&nbsp;
                <input placeholder="Name of Exp"
                value={expenseData.expense} name="expense" 
                id="expense" onChange={handleInputChange}></input>
                <br></br>

                <label htmlFor="amount">Amount : </label>
                &nbsp;&nbsp;
                <input placeholder="Amount"
                value={expenseData.amount} name="amount" 
                id="amount" onChange={handleInputChange}></input>
                <br></br>

                <label htmlFor="category">Category</label>
                &nbsp;&nbsp;
                <select placeholder="Enter Category"
                value={expenseData.category} name="category" 
                id="category" onChange={handleInputChange}>
                <option value={""}>Select Category</option>
                <option value={"Food"}>Food</option>
                <option value={"Travel"}>Travel</option>
                <option value={"Shopping"}>Shopping</option>
                <option value={"Bills"}>Bills</option>
                </select>
                <br></br>

                <label htmlFor="date">Date of Purchase : </label>
                &nbsp;&nbsp;
                <input placeholder="Date"
                value={expenseData.date} name="date" 
                id="date" onChange={handleInputChange}></input>
                <br></br>

                <button>Submit</button>

            </form>
        </div>
    );
}