import Http from '.';

const API = 'api/instruments';

class Iantrument {
    static fetch(filters) {
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
}

export default Iantrument;