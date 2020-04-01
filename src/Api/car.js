import Http from '.';

const API = 'api/cars';

class Car {
    static fetch(filters) {
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
    static fetchCar(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitCar(car) {
        console.log(car);
        if (!car.id) {
            return Http.post(API, { ...car });
        }
        return Http.put(`${API}/${car.id}`, { ...car });
    }
}

export default Car
