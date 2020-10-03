import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Event.css'

const Event = ({ volEvent }) => {
    const colorArr = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF']
    const randomColor = Math.floor(Math.random() * (4 - 0) + 0);

    let history = useHistory()

    const handleEventLink = (eventName) => {
        history.push('/createEvent')
    }

    return (
        <div className="col-md-3 col-sm-4 col-10">
            <div class="card-deck mb-3">
                <div class="card">
                    <Link onClick={() => handleEventLink(volEvent.name)} style={{textDecoration:'none'}}>
                        <img src={volEvent.src} class="card-img-top" alt="..." />
                        <div style={{backgroundColor:`${colorArr[randomColor]}`, borderRadius: '10px', padding: '15px'}} class="card-body">
                            <h5 class="card-title text-center text-white mb-0">{volEvent.name}</h5>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Event;