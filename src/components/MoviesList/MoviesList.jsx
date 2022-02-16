import s from './MoviesList.module.css';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
    return (
        <ul className={s.moviesList} >
            {movies.map(movie =>
            (<li key={movie.id}>
                <Link to=''>{movie.title || movie.name}</Link>
            </li>)
            )}
        </ul>
    )
}

// MoviesList.propTypes = {
//     movies: PropTypes.func
// }

export default MoviesList