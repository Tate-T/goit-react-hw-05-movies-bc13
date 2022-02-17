// import s from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import fetches from '../../services/moviesAPI';
import PropTypes from 'prop-types';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const location = useLocation();
    const movieId = location.state;

    useEffect(() => {
        movieId && fetches.fetchReviews(movieId).then(res => setReviews(res.results));
    }, [movieId])

    return (
        <>
            {reviews.length ? <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h3>Author: {review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul> : <h3>We dont have any reviews for this movie</h3>}
        </>
    )
}

Reviews.propTypes = {
    reviews: PropTypes.array
}