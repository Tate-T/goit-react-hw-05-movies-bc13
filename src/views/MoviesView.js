import { useState, useEffect } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
import fetches from '../services/moviesAPI';
import Form from '../components/Form/Form';
import MoviesList from '../components/MoviesList/MoviesList';

export default function MoviesView() {
    // const url = useRouteMatch();
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("")

    useEffect(() => {
        query && fetches.fetchMovie(query).then(res => setMovies(res.results));
    }, [query])

    return (
        <>
            <Form onSubmit={setQuery} />
            {query && <MoviesList movies={movies} />}
        </>
    )
}