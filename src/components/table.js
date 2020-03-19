import React from 'react';
import map from 'lodash/map';
import get from 'lodash/get';

export default ({data, columns}) => (
    <table>
        <tr>
            <th>
                Nombre
            </th>
            <th>
                Codigo
            </th>
        </tr>
        {map(data, d => (
            <tr key={d.id}>
                {map(columns, column => <td>{get(d, column)}</td>)}
            </tr>
        ))}
    </table>
)