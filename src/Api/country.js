import Http from '.';

const API = 'api/countries';

class Country {
    static fetch(filters) {
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }

    static fetchCountry(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitCountry(country) {
        console.log(country);
        if (!country.id) {
            return Http.post(API, { ...country });
        }
        return Http.put(`${API}/${country.id}`, { ...country });
    }
    
    static delete(id) {
        return Http.delete(`${API}/${id}`);
    }
}

export default Country;
