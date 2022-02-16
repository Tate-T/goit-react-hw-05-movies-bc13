import HomePage from '../components/HomePage/HomePage';
import { Link } from 'react-router-dom';

export default function HomeView(movies) {
    return (
        <>
            <HomePage />
            <ul key={movies.id}>
                {movies.map(movie => {
                    <li>
                        <Link>{movie}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}