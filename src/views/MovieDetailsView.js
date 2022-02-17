import { useState, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import fetches from '../services/moviesAPI';
import { lazy, Suspense } from 'react';
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export default function MoviesDetailsView() {
    const match = useRouteMatch();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        fetches.fetchMovieDetail(movieId).then(res => setMovie(res));

    }, [movieId])


    return (
        <div style={{ paddingTop: '1px', paddingBottom: '30px', backgroundColor: 'rgb(188, 236, 236)' }}>
            {movie && <>
                <div>
                    <Link to="/" style={{
                        display: 'block',
                        width: '100px',
                        margin: '20px',
                        padding: '10px',
                        backgroundColor: 'rgb(5, 153, 238)',
                        border: '1px solid black',
                        borderRadius: '5px',
                        textAlign: 'center',
                        alignItems: 'center',
                        color: 'white',
                        textDecoration: 'none'
                    }}>
                        Go back</Link>
                    <div style={{ display: 'flex' }}>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} style={{ marginLeft: '20px', marginRight: '20px' }} alt='' />
                        <div style={{ margin: '20px' }}>
                            <h2>{movie.title}</h2>
                            <p>User score: {movie.vote_average}</p>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                            <h4>Genres:</h4>
                            <ul>
                                {movie?.genres?.length && movie.genres.map(genre => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{
                    margin: '20px',
                    borderBottom: '1px solid grey',
                    borderTop: '1px solid grey',
                    boxShadow: '0px 0px 4px blue',
                    backgroundColor: 'white'
                }}>
                    <h2 style={{
                        marginLeft: '20px'
                    }}>Additional information</h2>
                    <div>
                        <Link to={{ pathname: `${match.url}/cast`, state: movieId }} style={{ display: 'block', margin: '20px' }}>Cast</Link>
                        <Link to={{ pathname: `${match.url}/reviews`, state: movieId }} style={{ display: 'block', margin: '20px' }}>Reviews</Link>
                    </div>
                </div>
            </>
            }

            <Suspense fallback={<h1>Loading...</h1>}>
                <Route path={match.url + '/cast'}>
                    <Cast />
                </Route>

                <Route path={match.url + '/reviews'}>
                    <Reviews />
                </Route>
            </Suspense >
        </div>
    )
}