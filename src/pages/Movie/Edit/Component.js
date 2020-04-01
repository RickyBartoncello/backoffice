import React, {PureComponent} from 'react';
import map from 'lodash/map';
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

class FormBuilder extends PureComponent {
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.fetchMovie(this.props.match.params.id);
        }
    }

    render() {
        const {
            fields,
            submitMovieData
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
                        onClick={() => submitMovieData()}
                        tag={Link} color="primary" 
                        className="badge-pill" 
                        to={`/movies/`}
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default FormBuilder;