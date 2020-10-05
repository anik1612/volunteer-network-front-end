import React, { useContext, useEffect, useState } from 'react';
import { EventContext, UserContext } from '../../App';
import TaskList from '../TaskList/TaskList';

const EventTask = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useContext(EventContext);

    useEffect(() => {
        fetch('http://localhost:5000/volTasks?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div className='row mt-5'>
            {
                events.map(event => <TaskList eventList={event} />)
            }
        </div>
    );
};

export default EventTask;