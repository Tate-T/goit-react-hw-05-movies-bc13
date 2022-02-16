import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import fetches from '../services/moviesAPI';

export default function HomeView() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetches.fetchMovies()
            .then(res => setMovies(res.results));
    }, [])

    return (
        <>
            <h1>Trending today</h1>
            <MoviesList movies={movies} />
        </>
    )
}
