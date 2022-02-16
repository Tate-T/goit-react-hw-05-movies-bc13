const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '82d55dcaf5b3d3d74d5dfbfe8a424451';

async function fetchWithErrorHandling(url = '') {
    const response = await fetch(url);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

function fetchMovies() {
    return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${KEY}`)
}

function fetchMovie(query) {
    return fetchWithErrorHandling(`${BASE_URL}/search/movie?query=${query}&api_key=${KEY}&language=en-US&page=1&include_adult=false`)
}

function fetchMovieDetail(movie_id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movie_id}?api_key=${KEY}&language=en-US`)
}

function fetchCast(movie_id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`)
}

function fetchReviews(movie_id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`)
}

const fetches = { fetchMovies, fetchMovie, fetchMovieDetail, fetchCast, fetchReviews }

export default fetches