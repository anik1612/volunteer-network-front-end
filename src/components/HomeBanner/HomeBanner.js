import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './HomeBanner.css'

const HomeBanner = () => {
    const [volEvents, setVolEvents] = useState([])

    // const handleEvent = () => {
    //     fetch('http://localhost:5000/addEvents', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'Application/json',
    //         },
    //         body: JSON.stringify(fakeData)
    //     })
    // }

    
    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setVolEvents(data))

    }, [])

    return (
        <div className='home-banner container'>
            {/* banner text & search box */}
            <div className='d-flex justify-content-center'>
                <div className='banner-text'>
                    <h1 className='text-center mt-5 mt-sm-0 pt-sm-0 mt-md-0 pt-md-0 pt-5'>I GROW BY HELPING PEOPLE IN NEED.</h1>
                    <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
                        <input style={{ width: "370px" }} className="form-control mt-3 col-7" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary mt-3 search px-4" type="submit">Search</button>
                    </form>
                </div>
            </div>

            {/* volunteer event list */}
            <div className='row vol-event-list d-flex justify-content-center  mt-5 mt-sm-0 pt-sm-0 mt-md-0 pt-md-0 pt-5'>
                {volEvents.map(volEvent => <Event volEvent={volEvent} key={volEvent._id}/>)}
            </div>
        </div>
    );
};

export default HomeBanner;