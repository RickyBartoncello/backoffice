import React from 'react';
import map from 'lodash/map';
import get from 'lodash/get';

export default ({data, columns, headers, onSort}) => (
    <table>
        <tr>
            {map(headers, header => (
                <th onClick={() => onSort(header)}>
                    {header.label}
                </th>
            ))}
        </tr>
        {map(data, d => (
            <tr key={d.id}>
                {map(columns, column => <td>{get(d, column)}</td>)}
            </tr>
        ))}
    </table>
)