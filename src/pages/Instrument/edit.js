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
            stateFamily: '',
            stateInstrument: '',
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
            family,
            instrument
        } = this.props;

        const {
            stateFamily,
            stateInstrument
        } = this.state;

        return (
            <Container fluid>
                <Form>
                    <FormGroup>
                        <Label for="family">Familia: </Label>
                        <Input
                            key="family"
                            type="text"
                            family="family"
                            id="family"
                            placeholder="Escribe la Familia del Instrumento"
                            value={stateFamily}
                            onChange={
                                ({ target: { value } }) => this.handleChange(value, 'stateFamily')
                            }
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="instrument">Instrumento: </Label>
                        <Input
                            key="instrument"
                            type="text"
                            family="instrument"
                            id="instrument"
                            placeholder="Escribe el Nombre del Instrumento"
                            value={stateInstrument}
                            onChange={
                                ({ target: { value } }) => this.handleChange(value, 'stateInstrument')
                            }
                            required
                        />
                    </FormGroup>
                    <Button
                    tag={Link} color="primary" classfamily="badge-pill" to={`../instruments`} >
                        Enviar Modificacion
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Edit;