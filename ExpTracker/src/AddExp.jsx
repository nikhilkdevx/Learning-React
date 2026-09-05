import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function AddExp({setOrgData}){
    
    let[expenseData,setExpenseData] = useState({
        expense : "",
        amount : "",
        category : "",
        date: "",
    });

    let handleInputChange = (event) => {
        const {name,value} = event.target;

        setExpenseData((currData) => ({
            ...currData,
            [name]: value,
        }));
    }

    const newExpense = {
        ...expenseData,
        id: uuidv4()
    };
    
    let saveExpData = (event) => {
        event.preventDefault();
        setOrgData((currData)=>[
            ...currData,newExpense
        ]);
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