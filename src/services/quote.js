import Http from './http';

const API = 'api/quotes';

class Quote {
    static fetch() {
        return Http.get(API);
    }
}

export default Quote;