import set from 'lodash/set';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
    submitCarDataRequested,
    fetchCarRequested,
    updateCarData
} from '../../actions/car'

import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';



const Car = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { car } = useSelector(state => state.car.documents);
    console.log(car)
    const [title, setTitle] = useState('Nuevo carro');
    const submit = () => {
        dispatch(submitCarDataRequested())
    }
    console.log(id, car);
    useEffect(
        () => {
            if (id && id.includes('-') && (id.match(/-/g) || []).length === 4) {
                dispatch(fetchCarRequested(id));
                setTitle('Edición del carro')
            }
        }, [dispatch, id]);



    const handleChange = (value, path) => {
        set(car, path, value);
        dispatch(updateCarData(car)
        )
    }



    return (
        <Container fluid>
            <Form onSubmit={() => submit()}>
                <h3 sm={5}>{title}</h3>
                <Row form>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleBrand">Marca</Label>
                            <Input
                                type="text"
                                name="brand"
                                id="exampleBrand"
                                placeholder="ingrese la marca"
                                onChange={({ target: { value } }) => handleChange(value, 'brand')}
                                value={car.brand}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleModel">Modelo</Label>
                            <Input
                                type="text"
                                name="model"
                                id="exampleModel"
                                placeholder="ingrese el modelo"
                                onChange={({ target: { value } }) => handleChange(value, 'model')}
                                value={car.model}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleYear">Año</Label>
                            <Input
                                type="text"
                                name="year"
                                id="exampleYear"
                                placeholder="ingrese el año del carro"
                                onChange={({ target: { value } }) => handleChange(value, 'year')}
                                value={car.year}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <Button onClick={() => submit()}
                            color="primary"
                            className="badge-pill"
                        > Guardar </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
};

export default Car;