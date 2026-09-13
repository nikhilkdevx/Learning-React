import { useState } from "react";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "72fb7137";

export default function InputBox({setMovieData}) {
    const [formData, setFormData] = useState("");
    const handleInputChange = ((event) => {
        setFormData(event.target.value);
    });
    const handleSubmit =  (async(event) => {
        event.preventDefault();
        const movieData =await fetch(`${API_URL}?t=${formData}&apikey=${API_KEY}`);
        const jsonData = await movieData.json();
        console.log(jsonData);
        const newData = {
            title : jsonData.Title,
            year : jsonData.Year,
            imdb : jsonData.imdbRating,
            actors : jsonData.Actors,
            director : jsonData.Director,
            released : jsonData.Released,
            image : jsonData.Poster,
        };
        console.log(newData);
        setMovieData(newData);
        setFormData("");
    });
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