import Http from '.';

const API = 'api/instruments';

class Instrument {
    static fetch(filters) {
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
}

export default Instrument;
