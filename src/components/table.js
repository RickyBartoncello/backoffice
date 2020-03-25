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

export default ({ data, columns, headers, onSort, limit, total, onPageClick, currentPage }) => (
    <Container fluid>
        <Row>
            <Col>
                <Table bordered size="sm" hovered dark>
                    <thead>
                        <tr>
                            {map(headers, header => (
                                <th onClick={() => onSort(header)}>
                                    <center>
                                        {header.label}
                                        {header.sort === 'desc' && (<i className="fas fa-angle-up float-right" />)}
                                        {header.sort !== 'desc' && (<i className="fas fa-angle-down float-right" />)}
                                    </center>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {map(data, d => (
                            <tr key={d.id} className={d.deleted ? "bg-danger" : ""}>

                                {map(columns, column => {
                                    if (column === 'actions') {
                                        return (<td>
                                            <center>
                                                <Button tag={Link} color="primary" to={`/src/pages/Country/edit.js${d.code}`} className="badge-pill"> Edición </Button>
                                                <Button tag={Link} to={`/src/pages/Country/edit.js${d.code}`} className="badge-pill badge-danger"> Delete </Button>
                                            </center>
                                        </td>);
                                    }

                                    return (<td><center>{get(d, column)}</center></td>);
                                })}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={columns.length}>
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
                    </tfoot>\
                </Table>
            </Col>
        </Row>
    </Container>

)