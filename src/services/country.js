import Http from './http';

const API = 'api/country';

class Countries {
    static fetchCountries() {
        return Http.get(API);
    }

    static fetchCountry(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitcountry(country) {
        if (!country.id) {
            return Http.post(API, {...country});
        }
        return Http.put(`${API}/${country.id}`, {...country});
    }
}

export default Countries;
