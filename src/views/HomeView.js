import HomePage from '../components/HomePage/HomePage';

export default function HomeView(movies) {
    return (
        <>
            <HomePage />
            <ul>
                {movies.map(movie => {
                    <li>
                        <Link>{movie}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}