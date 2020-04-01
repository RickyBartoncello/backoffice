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
            this.props.fetchCountry(this.props.match.params.id);
        }
    }

    render() {
        const {
            fields,
            submitCountryData
        } = this.props;
        console.log(fields, submitCountryData);

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
                        onClick={() => submitCountryData()}
                        tag={Link} color="primary" 
                        className="badge-pill" 
                        to={`/country/`}
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default FormBuilder;