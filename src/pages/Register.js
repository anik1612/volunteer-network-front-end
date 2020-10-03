import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventNameContext, UserContext } from '../App';
import brandImg from '../images/brandLogo.png'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [eventName, setEventName] = useContext(EventNameContext);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSubmit = () => {
        
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <Link to="/home" className='brand-img mb-5'>
                <img style={{ height: '50px' }} className='mt-5' src={brandImg} alt="" />
            </Link>
            <div className='border rounded'>
                <div className='d-flex flex-column p-5'>
                    <h3 className='mb-5'>Registration as a volunteer</h3>
                    <form action="/newRegistration" method='post' onSubmit={handleSubmit} className="d-flex flex-column">
                        <input className='form-control mb-3' type="text" name="" id="" placeholder='Full Name' defaultValue={loggedInUser.name} required />
                        <input className='form-control mb-3' type="text" name="" id="" placeholder='Username or Email' defaultValue={loggedInUser.email} required />
                        <div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="dd/MM/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>
                        <input className='form-control mb-3' type="text" name="" id="" placeholder='Description' required />
                        <input className='form-control mb-3' type="text" name="" id="" placeholder='Event Name' defaultValue={eventName} required />
                        <input className='btn btn-primary btn-block font-weight-bold' type="submit" value="Registration" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;