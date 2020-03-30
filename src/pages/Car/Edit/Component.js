import React, {PureComponent} from 'react';
import map from 'lodash/map';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
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
<<<<<<< HEAD
=======
        } else {
            this.props.updateCar({});
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
        }
    }

    render() {
        const {
            fields,
            submitCarData
        } = this.props;

<<<<<<< HEAD
        console.log(this.props)

=======
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
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
<<<<<<< HEAD
                                    value={this.props.value}
=======
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
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