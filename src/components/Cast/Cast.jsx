// import s from './Cast.module.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import fetches from '../../services/moviesAPI';

export default function Cast() {

    // console.log(movieId);
    const [casts, setCasts] = useState([]);
    const location = useLocation()
    // console.log(location);
    const movieId = location.state;

    useEffect(() => {
        movieId && fetches.fetchCast(movieId).then(res => setCasts(res.cast));
    }, [movieId])

    return (
        <>
            {casts.length ? <ul>
                {casts.map(cast => (
                    <li key={cast.id}>
                        {cast.profile_path && <img
                            src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                            alt=""
                            width="50px"
                            height="50px"
                        />}
                        <h3>{cast.name}</h3>
                        <p>{cast.character}</p>
                    </li>
                ))}
            </ul> : <h3>We dont have any reviews for this movie</h3>}
        </>
    )
}