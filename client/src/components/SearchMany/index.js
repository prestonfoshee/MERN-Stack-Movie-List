import React, { useState } from 'react';
import Axios from 'axios';

const SearchMany = () => {

    const [movieYear, setMovieYear] = useState("");
    const [movieDirector, setMovieDirector] = useState("");
    // const [resultsYear, setResultsYear] = useState("");
    // const [resultsDirector, setResultsDirector] = useState("");
    const [resultsTitle, setResultsTitle] = useState("");

    const movieSearchYear = (year) => {
        Axios.post("http://localhost:45030/movies/search", null, {
            params: {
                year: year,
            }
        })
            .then(response => {
                // setResultsYear(response.data.movies.year);
                // setResultsDirector(response.data.movies.director);
                setResultsTitle(response.data.movies.title);
                console.log(response.data.movies.title);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }

    const movieSearchDirector = (director) => {
        Axios.post("http://localhost:45030/movies/search", null, {
            params: {
                director: director,
            }
        })
            .then(response => {
                // setResultsYear(response.data.movies.year);
                // setResultsDirector(response.data.movies.director);
                setResultsTitle(response.data.movies.title);
                console.log(response.data.movies.title);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }

    return (
        <div>
            <h2>Search movies by year or director</h2>
            <p>Year:</p>
            <input type="text" onChange={(e) => setMovieYear(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginTop: "20px", marginBottom: "10px" }}
                onClick={() => movieSearchYear(movieYear)}>
                Search by year
            </button>
            <p>Director:</p>
            <input type="text" onChange={(e) => setMovieDirector(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginTop: "20px", marginBottom: "10px" }}
                onClick={() => movieSearchDirector(movieDirector)}>
                Search by director
            </button>
            {(() => {
                if (movieYear !== undefined || "") {
                    return (
                        <div>
                            <p>
                                Title: {resultsTitle}
                            </p>
                        </div>
                    )
                } else if (movieDirector !== undefined || "") {
                    return (
                        <div>
                            <p>Title: {resultsTitle}</p>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <p>Movie not found</p>
                        </div>
                    )
                }
            })()}
            {/* {
                (resultsYear !== undefined || "") ? (
                    <div>
                        <p>Title: {resultsTitle}</p>
                    </div>

                ) : (
                    <div>
                        <p>Movie not found</p>
                    </div>
                )
            } */}
        </div>
    )
}

export default SearchMany;
