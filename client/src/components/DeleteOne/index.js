import React, { useState } from 'react';
import Axios from 'axios';

const DeleteOne = () => {

    const [title, setTitle] = useState("");
    const [resultNum, setResultNum] = useState();

    const deleteMovie = (title) => {
        Axios.delete("http://localhost:45030/movies/" + title)
            .then(response => {
                setResultNum(response.data.deleted);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    };

    return (
        <div>
            <h2>Delete movie by title</h2>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }}
                type="text" onChange={(e) => setTitle(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginBottom: "30px" }}
                onClick={() => deleteMovie(title)}>Delete</button>
            {
                (resultNum === 0) ? (

                    <p>Movie not found</p>
                )
                    : (
                        <p>Number of deleted books: {resultNum}</p>
                    )
            }
        </div>
    )
}

export default DeleteOne;
