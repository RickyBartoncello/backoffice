import Http from '.';

const API = 'api/quotes';

class Quotes {
    static fetch(filters) {
        console.log(filters)
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
}

export default Quotes;