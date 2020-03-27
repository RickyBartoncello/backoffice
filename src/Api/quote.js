import Http from '.';

const API = 'api/quotes';

class Quote {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
}

export default Quote;
