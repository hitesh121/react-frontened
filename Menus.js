import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
const Menus=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/">
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-feedback">
                Add Feedback
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-feedback">
                View Feedback
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!">
                Contact
            </Link>
        </ListGroup>

    );
}

export default Menus;