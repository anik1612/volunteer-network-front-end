import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RegisteredEventList from '../../components/RegisteredEventList/RegisteredEventList';
import brandImg from '../../images/brandLogo.png'

const AdminDashboard = () => {
    const [registeredEvents, setRegisteredEvents] = useState([])

    // fetch data from already register event for admin 
    useEffect(() =>{
        fetch('http://localhost:5000/allRegEvents')
        .then(res => res.json())
        .then(data => {
            setRegisteredEvents(data);
        })
    })

    // for refresh User Interface
    const refreshUI = () => {
        fetch('http://localhost:5000/allRegEvents')
        .then(res => res.json())
        .then(data => {
            setRegisteredEvents(data);
        })
    }

    // delete req to server
    const deleteRegisteredEvent = (id) => {
        fetch(`http://localhost:5000/deleteRegisteredTask/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    refreshUI();
                }
            })
    }

    return (
        <div style={{ background: '#E5E5E5', minHeight: '100vh' }}>
            <div className='d-flex mt-4 mb-5'>
                <div style={{ minHeight: '100vh', minWidth: '250px' }} className='pr-5 bg-light'>
                    <Link to="/home" className='brand-img'>
                        <img style={{ height: '50px', marginLeft: '35px' }} src={brandImg} alt="" />
                    </Link>
                </div>
                <div style={{ width: '100%' }}>
                    <h4 className='bg-light d-block pb-4 font-weight-bold pl-2'>Volunteer register list</h4>
                    <div style={{ minWidth: '1030px' }} className='bg-light mx-4 mt-4 border rounded mb-3'>

                        {/* table header */}
                        <div className='d-flex flex-column container'>
                            <div className='d-flex row pt-3 mx-2 mt-3 border rounded' style={{ background: '#F5F6FA'}}>
                                <div className='col-md-2'>
                                <p className='font-weight-bold'>Name</p> 
                                </div>
                                <div className='col-md-3'>
                                <p className='font-weight-bold'>Email ID</p> 
                                </div>
                                <div className='col-md-3'>
                                <p className='font-weight-bold'>Register Date</p>
                                </div>
                                <div className='col-md-3'>
                                <p className='font-weight-bold'>Volunteer List</p>
                                </div>
                                <div className='col-md-1'>
                                <p className='font-weight-bold'>Action</p> 
                                </div>
                            </div>    

                            {/* pass data to registeredEventsList components */}
                            <div style={{ background: '#F5F6FA'}}>
                                {
                                    registeredEvents.map(registerEvent => <RegisteredEventList registerEvent={registerEvent} deleteRegisteredEvent={deleteRegisteredEvent} key={registerEvent._id}/>)
                                }
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default AdminDashboard;