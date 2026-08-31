import { useState } from "react"

export default function Comment(){
    let [formData,setFormData] = useState({
        userName : "",
        review : "",
        rating : "",
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newVal = event.target.value;
        setFormData((currData) => {
            return {...currData,[fieldName] : newVal }
        });

    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
        userName : "",
        review : "",
        rating : "",
        });
    };
    return (
        <div>
            <h4>Give Feedback</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">Username</label>
                <input placeholder="Enter Username" name="userName"
                id="userName" value={formData.userName} 
                type = "text" onChange={handleInputChange}>
                </input>
                <br></br>

                <label htmlFor="review">Give Review</label>
                <textarea placeholder="Enter review" name="review"
                id="review" value={formData.review} 
                type="text" onChange={handleInputChange}>
                </textarea>
                <br></br>

                <label htmlFor="rating">Rating</label>
                <input placeholder="Enter rating" name="rating"
                id="rating" value={formData.rating} 
                type="number" min={0} max={10} onChange={handleInputChange}>
                </input>
                <br></br>

                <button>Submit</button>
            </form>
        </div>
    )
}