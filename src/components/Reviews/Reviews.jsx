// import s from './Reviews.module.css';
import { useState, useEffect } from 'react';
import fetches from '../../services/moviesAPI';


export default function Reviews({ movieId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetches.fetchReviews(movieId).then(res => setReviews(res));
    }, [movieId])

    return (
        <>
            {reviews && reviews.results.length !== 0 ? (
                reviews.results.map(review => (
                    <li key={review.id}>
                        <h3>Author: {review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                ))
            ) : (<></>)}
            {reviews && reviews.results.length === 0 && <h3>We dont have any reviews for this movie</h3>}
        </>
    )
}