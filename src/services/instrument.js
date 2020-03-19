import Http from './http';

const API = 'api/instruments';

class Instrument {
    static fetch() {
        return Http.get(API);
    }
}

export default Instrument;