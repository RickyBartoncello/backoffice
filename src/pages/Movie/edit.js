import set from 'lodash/set';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
    submitMovieDataRequested,
    fetchMovieRequested,
    updateMovieData
} from '../../actions/movie'

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



const Movie = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { movie } = useSelector(state => state.movie.documents);
    console.log(movie)
    const [title, setTitle] = useState('Nueva Pelicula');
    const submit = () => {
        dispatch(submitMovieDataRequested())
    }
    console.log(id, movie);
    useEffect(
        () => {
            if (id && id.includes('-') && (id.match(/-/g) || []).length === 4) {
                dispatch(fetchMovieRequested(id));
                setTitle('Edición del moviero')
            }
        }, [dispatch, id]);



    const handleChange = (value, path) => {
        set(movie, path, value);
        dispatch(updateMovieData(movie)
        )
    }



    return (
        <Container fluid>
            <Form onSubmit={() => submit()}>
                <h3 sm={5}>{title}</h3>
                <Row form>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleTitle">Titulo</Label>
                            <Input
                                type="text"
                                name="title"
                                id="exampleTitle"
                                placeholder="Ingrese el Titulo de la Pelicula"
                                onChange={({ target: { value } }) => handleChange(value, 'title')}
                                value={movie.title}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleGenres">Genero</Label>
                            <Input
                                type="text"
                                name="genres"
                                id="exampleGenres"
                                placeholder="Ingrese el Genero de la Pelicula"
                                onChange={({ target: { value } }) => handleChange(value, 'genres')}
                                value={movie.genres}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleYear">Año</Label>
                            <Input
                                type="text"
                                name="year"
                                id="exampleYear"
                                placeholder="Ingrese el año de la Pelicula" 
                                onChange={({ target: { value } }) => handleChange(value, 'year')}
                                value={movie.year}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <Button onClick={() => submit()}
                            tag={Link} color="primary"
                            className="badge-pill"
                            to={`/movies/`}
                        > Guardar </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
};

export default Movie;