import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div>
            <Link to='/createEvent'>Add Event</Link>
        </div>
    );
};

export default Dashboard;