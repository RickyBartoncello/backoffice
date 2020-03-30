import Http from '.';

const API = 'api/cars';

class Car {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
<<<<<<< HEAD

    static fetchCar(id) {
        console.log(id);
        return Http.get(`${API}/${id}`);
    }

=======
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
    static submitCar(car) {
        if (!car.id) {
            return Http.post(API, { ...car });
        }
        return Http.put(`${API}/${car.id}`, { ...car });
    }
}

export default Car
