import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons';
import './User.css';


const User = (props) => {
    
    const { name, img, email, salary, phone} = props.users;
    const { city } = props.users.address;
    return (
        <div className="col-md-4 mb-5 user-profiles">
            <div className="profile rounded">
                <div className="avatar mx-auto">
                    <img src={img} className="rounded-pill z-depth-1-half" alt="Sample avatar"/>
                </div>
                <h4 className="font-weight-bold dark-grey-text">{name}</h4>
                <h6 className="text-uppercase grey-text "><strong>Form:</strong> {city}</h6>
                <h6 className="text-uppercase grey-text mb-3"><strong>Salary:</strong> {salary}</h6>
                <ul>
                    <li><strong>Contact Info</strong> </li>
                    <li>{email}</li>
                    <li>{phone}</li>
                </ul>
                <button onClick={() => props.handleAddUserBtn(props.users)} className="btn btn-outline-primary btn-rounded btn-sm"><FontAwesomeIcon icon={faPlus} /> Add Me</button>
            </div>
        </div>
    );
};

export default User;