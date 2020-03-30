import React from 'react';
import map from 'lodash/map';
import get from 'lodash/get';
import { Link } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';
import Table from 'reactstrap/lib/Table';
import {
    Container,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

import times from 'lodash/times';
import ceil from 'lodash/ceil';
import toNumber from 'lodash/toNumber';

export default ({ data, columns, headers, onSort, limit, total, onPageClick, currentPage, linkTo }) => (
    <Container fluid>
        <Row>
                {console.log(data)}
            <Col>
                <Table bordered size="sm" hovered dark className="table table-striped table-bordered text-center">
                    <thead>
                        <tr>
                            {map(headers, header => (
                                <th onClick={() => onSort(header)}>
                                    {header.label}
                                    {header.sort === 'desc' && (<i className="fas fa-angle-up float-right" />)}
                                    {header.sort !== 'desc' && (<i className="fas fa-angle-down float-right" />)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {map(data, d => (
                            <tr key={d.id} className={d.deleted ? "bg-danger" : ""}>
                                {map(columns, column => {
                                    if (column === 'actions') {
                                        return (<td >
                                            <Button tag={Link} color="primary" className="badge-pill" to={`${linkTo}/edit/${d.id}`}> Edición  </Button>
                                            <Button tag={Link} className="badge-pill badge-danger">  Delete </Button>
                                        </td>);
                                    }
                                    return (<td>{get(d, column)}</td>);
                                })}
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Table>
                    <thead>
                        <center>
                            <tr>
                                <td colSpan={columns.length} >
                                    <Pagination aria-label="Page navigation example">
                                        <PaginationItem>
                                            <PaginationLink first onClick={() => onPageClick(0)} />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink previous onClick={() => onPageClick(currentPage - 1)} />
                                        </PaginationItem>
                                        {times(ceil(total / toNumber(limit)), it => (
                                            <PaginationItem>
                                                <PaginationLink onClick={() => onPageClick(it)}>
                                                    {it + 1}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ))}
                                        <PaginationItem>
                                            <PaginationLink next onClick={() => onPageClick(currentPage + 1)} />
                                        </PaginationItem>
                                    </Pagination>
                                </td>
                            </tr>
                        </center>
                    </thead>
                </Table>
            </Col>
        </Row>
    </Container>
)