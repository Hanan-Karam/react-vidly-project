import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
const Table = (props) => {
    const {data, columns, onSort, sortColumns } = props;
    return ( 
        <table className="table">
                    <TableHeader
                    columns = {columns}
                    sortColumns = {sortColumns}
                    onSort = {onSort}
                    />
                    <TableBody
                     data = {data}
                     columns = {columns}
                     />
                </table>

     );
}
 
export default Table;