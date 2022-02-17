import s from './MoviesList.module.css';
import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul className={s.moviesList} >
            {movies.map(movie =>
            (<li key={movie.id}>
                <NavLink
                    to={{
                        pathname: '/movies/' + movie.id,
                        state: { from: location },
                    }} activeStyle={{ color: "rgb(5, 153, 238)" }}>{movie.title || movie.name};</NavLink>
            </li>)
            )}
        </ul >
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array
}

export default MoviesList