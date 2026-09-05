import ExpCard from "./ExpCard";

export default function ShowExp({orgData}){
    return (
        <>
            <h5>Filter &nbsp;&nbsp;
                <select>
                    <option value={""} >By Category</option>
                    <option value={"Food"} >Food</option>
                    <option value={"Travel"} >Travel</option>
                    <option value={"Shopping"} >Shopping</option>
                    <option value={"Bills"} >Bills</option>
                </select>
            </h5>
           {orgData.map((expense)=>{
            return <ExpCard expense= {expense} key = {expense.id}/>
           })}
        </>
    );
}