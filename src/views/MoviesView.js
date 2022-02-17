import { useState, useEffect } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
import fetches from '../services/moviesAPI';
import Form from '../components/Form/Form';
import MoviesList from '../components/MoviesList/MoviesList';

export default function MoviesView() {
    // const url = useRouteMatch();
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("")
    console.log(query)
    useEffect(() => {
        query && fetches.fetchMovie(query).then(res => { setMovies(res.results); console.log(res) });
    }, [query])

    return (
        <div style={{ margin: '0', paddingTop: '1px', paddingBottom: '700px', backgroundColor: 'rgb(188, 236, 236)' }}>
            <Form onSubmit={setQuery} />
            {query && <MoviesList movies={movies} />}
        </div>
    )
}