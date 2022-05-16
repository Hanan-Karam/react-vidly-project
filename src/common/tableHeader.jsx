import React, { Component } from 'react';

//UI=> columns, sortColumns(obj), onSort(func)
class TableHeader extends Component {
    raiseSort = column=>{
        const sortColumns = {...this.props.sortColumns};
        if(sortColumns.column === column){
            sortColumns.order = (sortColumns.order === 'asc' )? 'desc':'asc';
        }else{
            sortColumns.column = column;
            sortColumns.order = 'asc';
        }
        this.props.onSort(sortColumns);
    };

    renderSortIcon = (column)=>{
        //const {sortColumns} = this.props;
        if(column.path !== this.props.sortColumns.column) return null;
        if (this.props.sortColumns.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>

    };
    render() { 
        return (  
            <thead>
                <tr>
                    {this.props.columns.map(column => (<th 
                    key={column.path || column.key}
                    onClick={()=>this.raiseSort(column.path)}>{column.label} {this.renderSortIcon(column)}</th>))}
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;