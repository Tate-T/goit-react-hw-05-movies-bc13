import { useState, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import fetches from '../services/moviesAPI';
// import Cast from '../components/Cast/Cast';
// import Reviews from '../components/Reviews/Reviews';

export default function MoviesDetailsView() {
    const match = useRouteMatch();
    const { movieId } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetches.fetchMovieDetail(movieId).then(res => setMovies(res));
    }, [movieId, movies])


    return (
        <>
            {movies && <>
                <div>
                    <Link to="/">Go back</Link>
                    <img src={movies.poster_path} alt='' />
                    <h2>{movies.title}</h2>
                    <p>User score:{movies.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movies.overview}</p>
                    <h4>Genres</h4>
                    <ul>
                        {movies.genres && movies.genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Additional information</h2>
                    <Link to={match.url + '/cast'}>Cast</Link>
                    <Link to={match.url + '/reviews'}>Reviews</Link>
                </div>
            </>
            }

            <Route path={match.url + '/cast'}>
                {/* <Cast /> */}
            </Route>

            <Route path={match.url + '/reviews'}>
                {/* <Reviews /> */}
            </Route>
        </>
    )
}