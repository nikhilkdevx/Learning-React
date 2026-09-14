import { useState } from "react";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "72fb7137";

export default function InputBox({setMovieData}) {
    const [formData, setFormData] = useState("");
    const [loading,setLoading] = useState(false);
    
    const handleInputChange = ((event) => {
        setFormData(event.target.value);
    });
    
    const handleSubmit =  (async(event) => {
        event.preventDefault();
        
        if(formData.trim() === ""){
            alert("Enter Movie Name");
            return;
        }
        setLoading(true);
        try{
            const movieData =await fetch(`${API_URL}?t=${formData}&apikey=${API_KEY}`);
            const jsonData = await movieData.json();
            if(jsonData.Response === "False"){
            alert("Movie Not Found");
            return;
            }
        
            setMovieData({
            title : jsonData.Title,
            year : jsonData.Year,
            imdb : jsonData.imdbRating,
            actors : jsonData.Actors,
            director : jsonData.Director,
            released : jsonData.Released,
            image : jsonData.Poster,
            });
            setFormData("");
        } catch(error){
            alert("Something went wrong");
            console.log(error)
        } finally {
            setLoading(false);
        }
        
    });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Inception" value={formData}
                    onChange={handleInputChange} type="text" 
                    name="movie" id="movie" disabled = {loading}></input>
                &nbsp;&nbsp;
                <button disabled = {loading}>
                    {loading ? "Searching..." : "Search"}
                </button>
            </form>
        </>
    );
}