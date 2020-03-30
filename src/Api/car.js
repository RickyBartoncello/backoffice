import Http from '.';

const API = 'api/cars';

class Car {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }

    static fetchCar(id) {
        console.log(id);
        return Http.get(`${API}/${id}`);
    }

    static submitCar(car) {
        if (!car.id) {
            return Http.post(API, { ...car });
        }
        return Http.put(`${API}/${car.id}`, { ...car });
    }
}

export default Car
