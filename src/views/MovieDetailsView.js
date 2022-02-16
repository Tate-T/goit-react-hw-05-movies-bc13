import { useState, useEffect } from 'react';
import { useParams, Route, Link } from "react-router-dom";

import fetches from '../services/moviesAPI';

export default function MoviesDetailsView() {
    const { movieId } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetches.fetchMovieDetail(movieId).then(res => {
            setMovies(res.movies)
        });
    }, [movieId, movies])


    return (
        <>
            {movies && <>
                <div>
                    {movies.poster_path}
                    <h2>{movies.title}</h2>
                    <p>User score:{movies.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movies.overview}</p>
                    <h4>Genres</h4>
                    <p>{movies.genres.genre.name}</p>
                </div>
                <div>
                    <h2>Additional information</h2>
                    <Link to=''>Cast</Link>
                    <Link to=''>Reviews</Link>
                </div>
            </>
            }

            <Route path="/movies/:movieId/cast">
                {/* <CastView /> */}
            </Route>

            <Route path="/movies/:movieId/reviews">
                {/* <ReviewsView /> */}
            </Route>
        </>
    )
}