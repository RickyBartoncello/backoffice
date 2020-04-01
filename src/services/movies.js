import Http from './http';

const API = 'api/movie';

class Movies {
    static fetchMovies() {
        return Http.get(API);
    }

    static fetchMovie(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitMovie(movie) {
        if (!movie.id) {
            return Http.post(API, {...movie});
        }
        return Http.put(`${API}/${movie.id}`, {...movie});
    }
}

export default Movies;
