import { useState } from "react";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "72fb7137";
export default function InputBox() {
    const [formData, setFormData] = useState("");
    const handleInputChange = ((event) => {
        setFormData(event.target.value);
    });
    const handleSubmit =  (async(event) => {
        event.preventDefault();
        const movieData =await fetch(`${API_URL}?t=${formData}&apikey=${API_KEY}`);
        const jsonData = await movieData.json();
        console.log(jsonData);
        setFormData("");
    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter Movie Name" value={formData}
                    onChange={handleInputChange} type="text" name="movie" id="movie"></input>
                &nbsp;&nbsp;
                <button>Search</button>
            </form>
        </>
    );
}