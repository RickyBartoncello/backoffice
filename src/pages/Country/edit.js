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
            stateName: '',
            stateCode: '',
            stateCreatedAt: ''
        };
    }

    handleChange(value, property) {
        this.setState(
            () => ({ [property]: value })
        );
    }

    render() {
        const {
            name,
            code,
            createdAt
        } = this.props;

        const {
            stateName,
            stateCode,
            stateCreatedAt
        } = this.state;

        return (
            <Container fluid>
                <Form>
                    <FormGroup>
                        <Label for="name">Pais: </Label>
                        <Input
                            key="name"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Escribe el Nombre del Pais"
                            value={stateName}
                            onChange={
                                ({ target: { value } }) => this.handleChange(value, 'stateName')
                            }
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="code">Codigo: </Label>
                        <Input
                            key="code"
                            type="text"
                            name="code"
                            id="code"
                            placeholder="Escribe el Codigo del Pais"
                            value={stateCode}
                            onChange={
                                ({ target: { value } }) => this.handleChange(value, 'stateCode')
                            }
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="createdAt">Creado </Label>
                        <Input
                            key="createdAt"
                            type="number"
                            name="createdAt"
                            id="createdAt"
                            placeholder="Escribe el numero Creado"
                            value={stateCreatedAt}
                            onChange={
                                ({ target: { value } }) => this.handleChange(value, 'stateCreatedAt')
                            }
                            required
                        />
                    </FormGroup>
                    <Button
                    tag={Link} color="primary" className="badge-pill" to={`../country`} >
                        Enviar Modificacion
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Edit;