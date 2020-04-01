import Http from '.';

const API = 'api/countries';

class Country {
    static fetch(filters) {
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
}

export default Country;
