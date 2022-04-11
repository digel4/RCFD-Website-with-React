import { Link } from 'react-router-dom';
import events from '../../../APIS/events';


const EventCardButtons = (props) => {
    console.log(props)
    const deleteEvent = async () => {
        await events.delete(`/admin/${props.id}`)
    }
    if (props.token) { 
        return (
            <p className="bodycopyb card-text text-center">
                <Link to={`/events/${props.id}`} className="btn btn-primary btn-block"> See more</Link>
                {/* <button className="btn btn-primary btn-block" >edit</button> */}
                <Link to={`/admin/editEvent/${props.id}`} className="btn btn-primary btn-block">Edit Event</Link>
                <button className="btn btn-primary btn-block" onClick={deleteEvent}>delete</button>
            </p>
        )
    } else {
        return(
            <p className="bodycopyb card-text text-center">
                <Link to={`/events/${props.id}`} className="btn btn-primary btn-block"> See more</Link>
            </p>
        )
    }
}


export default EventCardButtons