import React from "react";

const Filter = (props) => {
    const {genresNames :items, textProperty, valueProperty, onFilter, selectedGenre} = props;
    return (
    <React.Fragment>
    <h3 className={"m-2 text-success  fw-bold  p-3"}>Filter Based On Genres</h3>
    <ul className="list-group">
        {items.map(item =>(<li className={item === selectedGenre ? "list-group-item active" : "list-group-item"}
        key={item[valueProperty]}
        onClick = {()=> onFilter(item)}
        >
         {item[textProperty]}   
        </li>))}   
    </ul>
    </React.Fragment>
    );
};
 
Filter.defaultProps = {
    textProperty : 'name',
    valueProperty : '_id'
};
export default Filter;