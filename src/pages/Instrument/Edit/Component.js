import React, {PureComponent} from 'react';
import map from 'lodash/map';
import { Link } from 'react-router-dom';
import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class FormBuilder extends PureComponent {
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.fetchInstrument(this.props.match.params.id);
        }
    }

    render() {
        const {
            fields,
            submitInstrumentData
        } = this.props;

        return (
            <Container fluid>
                <Form>
                    {map(fields, field => (
                        <FormGroup>
                            <Label>
                                {field.label}
                                <br/>
                                <Input
                                    key={field.control}
                                    name={field.control}
                                    {...field}
                                />
                            </Label>
                        </FormGroup>
                    ))}
                    <Button
                        onClick={() => submitInstrumentData()}
                        tag={Link} color="primary" 
                        className="badge-pill" 
                        to={`/instruments/`}
                    >
                        Enviar
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default FormBuilder;