import Http from './http';

const API = 'api/instrument';

class Instruments {
    static fetchInstruments() {
        return Http.get(API);
    }

    static fetchInstrument(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitInstrument(instrument) {
        if (!instrument.id) {
            return Http.post(API, {...instrument});
        }
        return Http.put(`${API}/${instrument.id}`, {...instrument});
    }

    static deletInstrument(id) {
        return Http.delete(`${API}/${id}`, {...id});
    }
}

export default Instruments;
