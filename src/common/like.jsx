/* import React, { Component } from 'react';
class Like extends Component {
    render() { 
        let classes = "fa fa-heart";
        if(!this.props.liked) classes +="-o"
        return <i onClick={this.props.onClick} 
        className={classes} aria-hidden="true"
        style={{cursor: "pointer"}}></i>;
    }
}
export default Like;
 */
const Like = (props) => {
    let classes = "fa fa-heart";
        if(!props.liked) classes +="-o"
        return <i onClick={props.onClick} 
        className={classes} aria-hidden="true"
        style={{cursor: "pointer"}}></i>;
}
 
export default Like;