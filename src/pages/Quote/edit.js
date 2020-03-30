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
            stateText: '',
            stateAuthor: '',
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
            text,
            author,
            createdAt
        } = this.props;

        const {
            stateText,
            stateAuthor,
            stateCreatedAt
        } = this.state;

        return (
            <Container fluid>
                <Form>
                    <FormGroup>
                        <Label for="text">Poema: </Label>
                        <Input
                            key="text"
                            type="text"
                            text="text"
                            id="text"
                            placeholder="Escribe el Nombre del Poema"
                            value={stateText}
                            onChange={
                                ({ target: { value } }) => this.handleChange(value, 'stateText')
                            }
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Autor: </Label>
                        <Input
                            key="author"
                            type="text"
                            text="author"
                            id="author"
                            placeholder="Escribe el Autor del Poema"
                            value={stateAuthor}
                            onChange={
                                ({ target: { value } }) => this.handleChange(value, 'stateAuthor')
                            }
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="createdAt">Creado </Label>
                        <Input
                            key="createdAt"
                            type="number"
                            text="createdAt"
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
                    tag={Link} color="primary" classtext="badge-pill" to={`../quotes`} >
                        Enviar Modificacion
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Edit;