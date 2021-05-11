import React, { useState } from 'react';
import Axios from 'axios';

const SearchOne = () => {

    const [movieTitle, setMovieTitle] = useState("");
    const [resultsTitle, setResultsTitle] = useState("");
    const [resultsDirector, setResultsDirector] = useState("");

    const movieSearch = (title) => {
        Axios.get("http://localhost:45030/movies/" + title)
            .then(response => {
                setResultsTitle(response.data.title);
                setResultsDirector(response.data.director);
                console.log(resultsTitle);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }

    return (
        <div>
            <h2>Search movies by title</h2>
            <input type="text" onChange={(e) => setMovieTitle(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginTop: "20px", marginBottom: "10px" }} onClick={() => movieSearch(movieTitle)}>
                Search
            </button>
            {
                (resultsTitle !== undefined || "") ? (
                    <div>
                        <p>Title: {resultsTitle}</p>
                        <p>Director: {resultsDirector}</p>
                    </div>

                ) : (
                    <div>
                        <p>Movie not found</p>
                    </div>
                )
            }
        </div>
    )
}

export default SearchOne;
