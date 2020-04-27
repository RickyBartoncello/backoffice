import Http from '.';

const API = 'api/movies';

class Movie {
    static fetch(filters) {
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }

    static fetchMovie(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitMovie(movie) {
        console.log(movie);
        if (!movie.id) {
            return Http.post(API, { ...movie });
        }
        return Http.put(`${API}/${movie.id}`, { ...movie });
    }

    static delete(id) {
        return Http.delete(`${API}/${id}`);
    }
}

export default Movie;
