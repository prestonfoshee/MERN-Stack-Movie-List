import React, { useState } from 'react';
import Axios from 'axios';

const AddMovie = () => {

    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [movieDirector, setMovieDirector] = useState("");
    const [movieRating, setMovieRating] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    const [resultsTitle, setResultsTitle] = useState("");


    const putOne = (title, year, director, rating, description) => {
        Axios.put("http://localhost:45030/movies/" + title, {
            year: movieYear,
            director: movieDirector,
            rating: movieRating,
            description: movieDescription
        })
            .then(response => {
                setResultsTitle(response.data[0].title);
                console.log(response.data[0].title);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }

    return (
        <div>
            <h2>Add a movie</h2>
            <p>Title:</p>
            <input type="text" onChange={(e) => setMovieTitle(e.target.value)} />
            <p>Year:</p>
            <input type="text" onChange={(e) => setMovieYear(e.target.value)} />
            <p>Director:</p>
            <input type="text" onChange={(e) => setMovieDirector(e.target.value)} />
            <p>Rating:</p>
            <input type="text" onChange={(e) => setMovieRating(e.target.value)} />
            <p>Description:</p>
            <input type="text" onChange={(e) => setMovieDescription(e.target.value)} />
            <button
                style={{ display: "block", margin: "auto", marginTop: "20px", marginBottom: "8px" }}
                onClick={() => putOne(movieTitle, movieYear, movieDirector, movieRating, movieDescription)}>
                Add
            </button>
            <p>Movie added: {resultsTitle}</p>
        </div>
    )
}

export default AddMovie;
