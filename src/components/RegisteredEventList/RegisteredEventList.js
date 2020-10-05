import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const RegisteredEventList = ({ registerEvent, deleteRegisteredEvent }) => {
    
    return (
        <div className='row mx-2 mt-3'>
            <div className='col-md-2'>
                <p>{registerEvent.fullName}</p>
            </div>
            <div className='col-md-3'>
                <p>{registerEvent.email}</p>
            </div>
            <div className='col-md-3'>
                <p>{registerEvent.registerDate}</p>
            </div>
            <div className='col-md-3'>
                <p>{registerEvent.eventName}</p>
            </div>
            <div className='col-md-1'>
                <button onClick={() => deleteRegisteredEvent(registerEvent._id)} className='btn text-danger btn-light'><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    );
};

export default RegisteredEventList;