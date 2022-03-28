import React,  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EventCards from './EventCards';
import fetchEvents from '../../APIS/events';
import { fetchCurrEvents } from '../../actions';
import { fetchPastEvents } from '../../actions';
import { connect } from 'react-redux';



const Events = (props) => {
    // const [ currEvents, setCurrEvents ] = useState(null)
    // const [ pastEvents, setPastEvents ] = useState(null)

    // const currEventsList = async () => {
    //     const res = await fetchEvents.get('/events');
    //     setCurrEvents(res.data);
    //     console.log(res.data);
       
    // }

    // const pastEventsList = async () => {
    //     const res = await fetchEvents.get('/pastevents');
    //     setPastEvents(res.data);
    //     console.log(res.data);
       
    // }

    useEffect( () => {
        // currEventsList();
        // pastEventsList();
        console.log("props for useEffect are:")
        console.log(props)
        props.fetchCurrEvents();
        props.fetchPastEvents();
     }, []);
     

    const { pathname } = useLocation();
    
    const currEventsLoader = () => {
        if (!props.currEvents) {
            return 'loading'
        } else {
            return <EventCards eventsList={props.currEvents} previousEvents={false}/>
        }
    }

    const pastEventsLoader = () => {
        if (!props.pastEvents) {
            return 'loading'
        } else {
            return <EventCards eventsList={props.pastEvents} previousEvents={true} />
        }
    }
    

    const eventsSelector = () => {
        if(pathname === '/events') {
            return (
                <div>
                    {currEventsLoader()}
                </div>
            )
        } else if(pathname === '/pastevents') {
            return (
                <div>
                    {pastEventsLoader()}
                </div>
            )
        }
    }
    return (
        
        <div className="container">
        <div>
            {eventsSelector()}
        </div>

    </div>
    )
}


// export default Events;

const mapStateToProps = state => {
    return {
        currEvents: state.events.currEvents,
        pastEvents: state.events.pastEvents
    }
}

export default connect(
    mapStateToProps,
    { 
        fetchCurrEvents, 
        fetchPastEvents 
    }
)(Events);
