import Http from '.';

const API = 'api/instruments';

class Instrument {
    static fetch(filters) {
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }

    static fetchInstrument(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitInstrument(instrument) {
        console.log(instrument);
        if (!instrument.id) {
            return Http.post(API, { ...instrument });
        }
        return Http.put(`${API}/${instrument.id}`, { ...instrument });
    }

    static delete(id) {
        return Http.delete(`${API}/${id}`);
    }
}

export default Instrument;
