import React from 'react';
import Table from 'reactstrap/lib/Table';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import get from 'lodash/get';

const DynamicTable = ({entities, entityProps, label}) => {
  return (
    <>
    <h1>{label}</h1>
    <Table dark>
      <thead>
        <tr>
            {map(entityProps, prop => <th>{prop}</th>)}
        </tr>
      </thead>
      <tbody>
        {map(entities, entity =>(
        <tr key={entity.id}>
            {map(entityProps, prop => <td>{get(entity, prop)}</td>)}
        </tr>       
        ))}
      </tbody>
    </Table>
    </>
  );
}

DynamicTable.propTypes = {
    entities: PropTypes.array,
    entityProps: PropTypes.array,
    label: PropTypes.string
};

DynamicTable.defaultProps = {
    entities: null,
    entityProps: null,
    label: ''
};

export default DynamicTable;
