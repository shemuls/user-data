import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faWindowClose, faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
import './AddedUsers.css';

const AddedUsers = (props) => {
    const {img, name, id} = props.addUsers;
    return (
        <div className="d-flex justify-content-between align-items-center my-3">
            <div className="user-img rounded">
                <img className="rounded z-depth-1-half" src={img} alt=""/>
            </div>
            <div className="user-name">
                <h6>{name}</h6>
            </div>
            <div className="added-done form-inline">
                <a href="/" className="text-danger"><FontAwesomeIcon icon={faWindowClose}/></a>
                <a href="/" className="ml-1 text-primary"><FontAwesomeIcon icon={faCheckCircle} /></a>
            </div>
        </div>
    );
};

export default AddedUsers;