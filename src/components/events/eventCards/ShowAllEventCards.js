import React,  { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import AllEventCards from './AllEventCards';
import { fetchCurrEvents } from '../../../actions';
import { fetchPastEvents } from '../../../actions';
import { connect } from 'react-redux';

const ShowAllEventCards = (props) => {
    const { fetchCurrEvents, fetchPastEvents, token, currEvents, pastEvents } = props
    useEffect( () => {
        fetchCurrEvents();
        fetchPastEvents();
     }, [fetchCurrEvents, fetchPastEvents]);
     

    const { pathname } = useLocation();

    const adminControlPanel = () => {
        if(token) {
            return (
                <div id="admin-control-panel">
                    <h3>Admin Control Panel</h3>
                    <Link to="/admin/createEvent" className="btn btn-primary">Create Event</Link>
                </div>
            )
        }
    }
    
    const currEventsLoader = () => {
        if (!currEvents) {
            return 'loading'
        } else {
            return <AllEventCards token={token} eventsList={currEvents} previousEvents={false}/>
        }
    }

    const pastEventsLoader = () => {
        if (!pastEvents) {
            return 'loading'
        } else {
            return <AllEventCards token={token} eventsList={pastEvents} previousEvents={true} />
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
        <div id="events-selector">
            {adminControlPanel()}
            {eventsSelector()}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        currEvents: state.events.currEvents,
        pastEvents: state.events.pastEvents,
        token: state.admin.token

    }
}

export default connect(
    mapStateToProps,
    { 
        fetchCurrEvents, 
        fetchPastEvents 
    }
)(ShowAllEventCards);
