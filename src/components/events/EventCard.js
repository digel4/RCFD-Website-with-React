import { Link } from 'react-router-dom';
import EventCardButtons from './EventCardButtons';

const EventCard = (props) => {
    console.log("event card props are")
    console.log(props)
    return (
        <div>
            <div className="card">
                <img src={props.image} className="card-img-top " alt="..."></img>
                <div class="d-flex card-date card-img-overlay w-25">
                    <p class="bodycopyb text-center card-text">
                        {props.shortDate}
                    </p>
                </div>
                <div className="d-flex flex-column card-body mx-auto card-img-overlay">
                    <h3 className="h3o card-text text-center mx-auto">
                        {props.name}
                    </h3>
                    <p className="bodycopyb card-text text-center">
                        {props.excerpt}
                    </p>
                    <EventCardButtons id={props.id} token={props.token}/>
                </div>
            </div>
        </div>
    )
}


export default EventCard
