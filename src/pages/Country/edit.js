import set from 'lodash/set';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    submitCountryDataRequested,
    fetchCountryRequested,
    updateCountryData
} from '../../actions/country'

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



const Country = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { country } = useSelector(state => state.country.documents);
    console.log(country)
    const [title, setTitle] = useState('Nuevo Pais');
    const submit = () => {
        dispatch(submitCountryDataRequested())
    }
    console.log(id, country);
    useEffect(
        () => {
            if (id && id.includes('-') && (id.match(/-/g) || []).length === 4) {
                dispatch(fetchCountryRequested(id));
                setTitle('Edición del Pais')
            }
        }, [dispatch, id]);



    const handleChange = (value, path) => {
        set(country, path, value);
        dispatch(updateCountryData(country)
        )
    }



    return (
        <Container fluid>
            <Form onSubmit={() => submit()}>
                <h3 sm={5}>{title}</h3>
                <Row form>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleCountry">Pais</Label>
                            <Input
                                type="text"
                                name="name"
                                id="exampleCountry"
                                placeholder="ingrese la Pais"
                                onChange={({ target: { value } }) => handleChange(value, 'name')}
                                value={country.name}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleCode">Codigo</Label>
                            <Input
                                type="text"
                                name="code"
                                id="exampleCode"
                                placeholder="ingrese el codeo"
                                onChange={({ target: { value } }) => handleChange(value, 'code')}
                                value={country.code}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="examplePoblation">Poblacion</Label>
                            <Input
                                type="text"
                                name="createdAt"
                                id="examplePoblation"
                                placeholder="ingrese numero de poblacion"
                                onChange={({ target: { value } }) => handleChange(value, 'createdAt')}
                                value={country.createdAt}
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

export default Country;