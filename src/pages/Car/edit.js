import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

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

class Edit extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            stateBrand: '',
            stateModel: '',
            stateYear: ''
        };
    }

    handleChange(value, property) {
        this.setState(
            () => ({ [property]: value })
        );
    }

    render() {
        const {
            brand,
            model,
            year,
            submitAction
        } = this.props;

        const {
            stateBrand,
            stateModel,
            stateYear
        } = this.state;

        return (
            <Container fluid>
                <Form>
                    <FormGroup>
                        <Label for="brand">Marca:</Label>
                        <Input
                            key="brand"
                            type="text"
                            name="brand"
                            id="brand"
                            placeholder="Escribe Marca del Automovil"
                            value={stateBrand}
                            onChange={
                                ({ target: { value } }) => this.handleChange(value, 'stateBrand')
                            }
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="model">Modelo: </Label>
                        <Input
                            key="model"
                            type="text"
                            name="model"
                            id="model"
                            placeholder="Escribe el Modelo del Automovil"
                            value={stateModel}
                            onChange={
                                ({ target: { value } }) => this.handleChange(value, 'stateModel')
                            }
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="year">Ano: </Label>
                        <Input
                            key="year"
                            type="number"
                            name="year"
                            id="year"
                            placeholder="Escribe el Ano del Automovil"
                            value={stateYear}
                            onChange={
                                ({ target: { value } }) => this.handleChange(value, 'stateYear')
                            }
                            required
                        />
                    </FormGroup>
                    <Button
                    tag={Link} color="primary" className="badge-pill" to={`../cars`} >
                        Enviar Modificacion
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Edit;