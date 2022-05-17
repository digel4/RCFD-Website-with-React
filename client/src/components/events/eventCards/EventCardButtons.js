import { Link } from 'react-router-dom';
import { } from '../../../actions';
import { connect } from 'react-redux';
import events from '../../../APIS/events';


const EventCardButtons = (props) => {
    const { id, token } = props;
    const deleteEvent = async () => {
        await events.delete(`/admin/${id}`)
    }


    if (token) { 
        return (
            <p className="body-copy-black card-text text-center">
                <Link to={`/events/${id}`} className="btn btn-primary btn-block"> See More</Link>
                {/* <button className="btn btn-primary btn-block" >edit</button> */}
                <Link to={`/admin/editEvent/${id}`} className="btn btn-primary btn-block">Edit Event</Link>
                <button className="btn btn-primary btn-block" onClick={deleteEvent}>Delete Event</button>
            </p>
        )
    } else {
        return(
            <p className="body-copy-black card-text text-center">
                <Link to={`/events/${id}`} className="btn btn-primary btn-block"> See more</Link>
            </p>
        )
    }
}


const mapStateToProps = state => {
    return {
        // currEvents: state.events.currEvents,
        // pastEvents: state.events.pastEvents,
        // token: state.admin.token,
        //adminStatus: { ...state.admin }

    }
}

export default connect(
    mapStateToProps,
    { 
        // fetchCurrEvents, 
        // fetchPastEvents,
        // adminLogout
    }
)(EventCardButtons);

