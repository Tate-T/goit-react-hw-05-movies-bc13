import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import * as moviesAPI from '../services/movieAPI';
import MoviesDetailsPage from '../components/MoviesPage/MovieDetailsPage/MovieDetailsPage';

export default function MoviesDetailsView() {
    const movieId = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        moviesAPI.fetchMovieById(movieId).then(setMovie);
    }, [movieId])

    return (
        <>
            <MoviesDetailsPage text={`Детали ${movieId}`} />

            {movie && <h2>{movie.title}</h2>}
        </>
    )
}