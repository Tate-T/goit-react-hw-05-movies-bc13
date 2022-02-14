// import { useState, useEffect } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
// import * as moviesAPI from '../services/moviesAPI';
// import MoviesPage from '../components/MoviesPage/MoviesPage';

// export default function MoviesView() {
//     const url = useRouteMatch();
//     const [movies, setMovies] = useState(null);

//     useEffect(() => {
//         moviesAPI.fetchMovies().then(setMovies);
//     }, [])

//     return (
//         <>
//             <MoviesPage />
//             {movies && movies.map(movie => <li key={movie.id} ><Link to={`/${url}/${movie.id}`}>{movie.title}</Link></li>)}
//         </>
//     )
// }