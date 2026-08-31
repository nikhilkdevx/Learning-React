import { useState } from "react";

export default function Form(){
    // let [fullname,setFullName] = useState("");
    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }

    // let [username,setUserName] = useState("");
    // let handleUsername = (event)=>{
    //     setUserName(event.target.value);
    // }

    let [formData,setFormData] = useState({
        fullname : "",
        username : "",
        password : "",
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newVal = event.target.value;
        setFormData((currData) => {
            return {...currData,[fieldName] : newVal};
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
        fullname : "",
        username : "",
        password : "",
    });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">FullName</label>
            <input placeholder="Enter Name" value={formData.fullname} 
                type="text" id = "fullname" onChange={handleInputChange}
                name="fullname">
            </input>

            <br></br>
            <label htmlFor="username">UserName</label>
            <input placeholder="Enter Username" value={formData.username} 
                type="text" id = "username" onChange={handleInputChange}
                name="username">
            </input>

            <br></br>
            <label htmlFor="password">Password</label>
            <input placeholder="Enter Password" value={formData.password} 
                type="password" id = "password" onChange={handleInputChange}
                name="password">
            </input>


            <br></br>
            <button>Submit</button>
        </form>
    );
}