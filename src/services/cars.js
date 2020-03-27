import Http from './http';

const API = 'api/car';

class Cars {
    static fetchCars() {
        return Http.get(API);
    }

    static fetchCar(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitCar(car) {
        if (!car.id) {
            return Http.post(API, {...car});
        }
        return Http.put(`${API}/${car.id}`, {...car});
    }
}

export default Cars;