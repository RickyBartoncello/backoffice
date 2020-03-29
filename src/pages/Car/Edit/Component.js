import React, {PureComponent} from 'react';
import map from 'lodash/map';
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

class FormBuilder extends PureComponent {
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.fetchCar(this.props.match.params.id);
        } else {
            this.props.updateCar({});
        }
    }

    render() {
        const {
            fields,
            submitCarData
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
                        onClick={() => submitCarData()}
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default FormBuilder;