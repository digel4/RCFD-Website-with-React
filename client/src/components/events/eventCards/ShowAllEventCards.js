import React,  { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import AllEventCards from './AllEventCards';
import { fetchCurrEvents, fetchPastEvents, adminLogout } from '../../../actions';
import { connect } from 'react-redux';

const ShowAllEventCards = (props) => {
    const { fetchCurrEvents, fetchPastEvents, token, currEvents, pastEvents, adminLogout } = props
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
                    <div className="admin-control-panel-buttons">
                        <Link to="/admin/createEvent" className="btn btn-primary">Create Event</Link>
                        <button className="btn btn-primary" onClick={() => adminLogout(token)}>Sign-out</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="admin-control-panel">
                    <h3>Admin Control Panel</h3>
                    <Link to="/login" className="btn btn-primary">Login</Link>
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
        token: state.admin.token,
        //adminStatus: { ...state.admin }

    }
}

export default connect(
    mapStateToProps,
    { 
        fetchCurrEvents, 
        fetchPastEvents,
        adminLogout
    }
)(ShowAllEventCards);
