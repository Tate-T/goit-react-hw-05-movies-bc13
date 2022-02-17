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
        <div style={{ backgroundColor: 'rgb(188, 236, 236)' }} >
            <h1 style={{ margin: '0', paddingBottom: '30px', textAlign: 'center', fontSize: '50px', color: 'rgb(5, 153, 238)', textShadow: '2px 3px 4px blue' }}>Trending today</h1>
            <MoviesList movies={movies} />
        </div>
    )
}
