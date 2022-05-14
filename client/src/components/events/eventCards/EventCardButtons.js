import { Link } from 'react-router-dom';
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


export default EventCardButtons