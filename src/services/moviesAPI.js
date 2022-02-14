const BASE_URL = 'http://localhost:3000';

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

function fetchMovies() {
    return fetchWithErrorHandling(`${BASE_URL}/movies`)
}

function fetchMovie() {
    return fetchWithErrorHandling(`${BASE_URL}/movies/${movieId}?_expand=movie`)
}

function fetchCast() {
    return fetchWithErrorHandling(`${BASE_URL}/movies/${movieId}?_expand=cast`)
}

function fetchReviews() {
    return fetchWithErrorHandling(`${BASE_URL}/movies/${movieId}?_expand=reviews`)
}