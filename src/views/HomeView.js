import HomePage from '../components/HomePage/HomePage';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
export default function HomeView({ movies }) {
    return (
        <>
            <HomePage />
            {/* <ul key={movies.id}>
                {movies.map(movie =>
                (<li>
                    <Link>{movie}</Link>
                </li>)
                )}
            </ul> */}
            <ul >
                <li>
                    Link
                </li>
            </ul>
        </>
    )
}

// HomePage.propTypes = {
//     movies: PropTypes.func
// }