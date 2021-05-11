import React, { useState } from 'react';
import Axios from 'axios';

const UpdateOne = () => {

    const [movieTitleQuery, setMovieTitleQuery] = useState("");
    const [movieTitleUpdate, setMovieTitleUpdate] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [movieDirector, setMovieDirector] = useState("");
    const [movieRating, setMovieRating] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    const [resultsTitle, setResultsTitle] = useState("");
    // const [resultsYear, setResultsYear] = useState("");
    // const [resultsDirector, setResultsDirector] = useState("");
    // const [resultsRating, setResultsRating] = useState("");
    // const [resultsDescription, setResultsDescription] = useState("");

    const updateMovie = (titleQuery, titleUpdate, year, director, rating, description) => {
        Axios.patch("http://localhost:45030/movies/" + titleQuery, {
            title: movieTitleUpdate,
            year: movieYear,
            director: movieDirector,
            rating: movieRating,
            description: movieDescription
        })
            .then(response => {
                setResultsTitle(response.data.title);
                console.log(resultsTitle);
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    }

    return (
        <div>
            <h2>Update movie info</h2>
            <p>Search movie title to update:</p>
            <input type="text" onChange={(e) => setMovieTitleQuery(e.target.value)} />
            <p>Update title:</p>
            <input type="text" onChange={(e) => setMovieTitleUpdate(e.target.value)} />
            <p>Update year:</p>
            <input type="text" onChange={(e) => setMovieYear(e.target.value)} />
            <p>Update director:</p>
            <input type="text" onChange={(e) => setMovieDirector(e.target.value)} />
            <p>Update rating:</p>
            <input type="text" onChange={(e) => setMovieRating(e.target.value)} />
            <p>Update description:</p>
            <input type="text" onChange={(e) => setMovieDescription(e.target.value)} />
            <button
                style={{ display: "block", margin: "auto", marginTop: "20px", marginBottom: "8px" }}
                onClick={() => updateMovie(movieTitleQuery, movieTitleUpdate, movieYear, movieDirector, movieRating, movieDescription)}>
                Update
            </button>
            <p>Updated movie: {resultsTitle}</p>
        </div>
    )
}

export default UpdateOne;
