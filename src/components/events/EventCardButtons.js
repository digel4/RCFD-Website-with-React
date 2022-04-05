import { Link } from 'react-router-dom';

const EventCardButtons = (props) => {
    console.log(props)
    if (props.token) { 
        return (
            <p className="bodycopyb card-text text-center">
                <Link to={`/events/${props.id}`}> See more</Link>
                <button className="btn btn-primary btn-block" >edit</button>
                <button className="btn btn-primary btn-block" >delete</button>
            </p>
        )
    } else {
        return(
            <p className="bodycopyb card-text text-center">
                <Link to={`/events/${props.id}`}> See more</Link>
            </p>
        )
    }
}


export default EventCardButtons