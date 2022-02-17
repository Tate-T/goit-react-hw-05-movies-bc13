// import s from './Cast.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetches from '../../services/moviesAPI';

export default function Cast() {
    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        fetches.fetchCast(movieId).then(res => setCasts(res));
    }, [movieId])

    return (
        <>
            {casts &&
                casts.map(cast => (
                    <li key={cast.id}>
                        <img
                            src={
                                cast.profile_path &&
                                `https://image.tmdb.org/t/p/w45${cast.profile_path}`
                            }
                            alt=""
                            width="50px"
                            height="50px"
                        />
                        <h3>{cast.name}</h3>
                        <p>{cast.character}</p>
                    </li>
                ))}
        </>
    )
}