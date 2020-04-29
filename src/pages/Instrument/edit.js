import set from 'lodash/set';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    submitInstrumentDataRequested,
    fetchInstrumentRequested,
    updateInstrumentData
} from '../../actions/instrument'

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



const Instrument = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { instrument } = useSelector(state => state.instrument.documents);
    console.log(instrument)
    const [title, setTitle] = useState('Nuevo instrumentro');
    const submit = () => {
        dispatch(submitInstrumentDataRequested())
    }
    console.log(id, instrument);
    useEffect(
        () => {
            if (id && id.includes('-') && (id.match(/-/g) || []).length === 4) {
                dispatch(fetchInstrumentRequested(id));
                setTitle('Edición del instrumento')
            }
        }, [dispatch, id]);



    const handleChange = (value, path) => {
        set(instrument, path, value);
        dispatch(updateInstrumentData(instrument)
        )
    }



    return (
        <Container fluid>
            <Form onSubmit={() => submit()}>
                <h3 sm={5}>{title}</h3>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="exampleFamily">Familia</Label>
                            <Input
                                type="text"
                                name="family"
                                id="exampleFamily"
                                placeholder="ingrese la familia"
                                onChange={({ target: { value } }) => handleChange(value, 'family')}
                                value={instrument.family}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="exampleInstrument">Instrumento</Label>
                            <Input
                                type="text"
                                name="instrument"
                                id="exampleInstrument"
                                placeholder="ingrese el instrumento"
                                onChange={({ target: { value } }) => handleChange(value, 'instrument')}
                                value={instrument.instrument}
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

export default Instrument;