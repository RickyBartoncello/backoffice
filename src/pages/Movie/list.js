import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Container,
    Button,
    Row,
    Col,
    Spinner,
    ButtonGroup,
    Modal,
    ModalFooter,
    ModalHeader,
    ModalBody
} from 'reactstrap';

import {
    fetchMoviesRequested,
    sortMovie,
    deleteMovieRequested
} from '../../actions/movie'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: null
        };
    }
    componentDidMount() {
        this.props.getMovies();
    }

    handlePagination = (skip) => {
        this.props.getMovies({ skip });
    }

    render() {
        const {
            movies,
            limit,
            total,
            tableProps,
            onSort,
            loading
        } = this.props;

        const {modal} = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Tabla de datos </h3>
                    </Col>
                    <Col sm="3">
                        <Button
                            className="float-right"
                            color="primary"
                            size="lg"
                            tag={Link}
                            to="/movies/edit/new"> Nuevo </Button>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        {loading && (
                            <Spinner color="danger" />
                        )}
                        {!loading && (
                            <Table {...{
                                data: movies,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination,
                                onDelete: modal => this.setState({ modal }),
                                linkTo: 'movies'
                            }} />
                        )}
                    </Col>
                </Row>
                {modal && (
                    <Modal isOpen>
                        <ModalHeader>
                            Te vo a borrar
                        </ModalHeader>
                        <ModalBody>
                            Confirme Accion {modal.title}  {modal.genres} {modal.year}
                        </ModalBody>
                        <ModalFooter>
                            <ButtonGroup>
                                <Button color="warning" onClick={() => {
                                    this.props.deleteMovie(modal.id)
                                    this.setState({ modal: null })
                                }} >
                                    Aceptar
                                </Button>
                                <Button color="info" onClick={() => this.setState({ modal: null })}>
                                    Cancelar
                                </Button>
                            </ButtonGroup>
                        </ModalFooter>
                    </Modal>
                )}
            </Container>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */) => {
    const { documents: { movies, limit, total, loading }, tableProps } = state.movie;
    return {
        tableProps,
        movies,
        limit,
        total,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */) => ({
    getMovies: filters => dispatch(fetchMoviesRequested(filters)),
    onSort: sort => dispatch(sortMovie(sort)),
    deleteMovie: id => dispatch(deleteMovieRequested(id))
    
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
