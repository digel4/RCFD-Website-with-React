import IndividualEventCard from "./IndividualEventCard";
import { Link } from 'react-router-dom';

const ShowAllEventCards = (props) => {

    const renderList = () => {
        return props.eventsList.map( event => {
            return <IndividualEventCard 
                name={event.name}
                image={event.image}
                shortDate={event.shortDate}
                excerpt={event.excerpt}
                id={event._id}
                key={event._id}
                token={props.token}
            />
        })
    }

    return (

        <div>
            <div className="container" id="events-gallery-container">
                <h1 className="h1b my-4">
                    <strong>
                    {props.previousEvents ? "Past Events & Workshops" : "Current Events & Workshops"}
                    </strong>
                </h1>
                <div className="events-gallery">
                    <div className="row">
                        {renderList()}
                    </div>
                </div>
            </div>
            <div id="more-info-box-title">
                <h1 className="h1b"><strong>More Info</strong></h1>
            </div>
                <div id="more-info-box">
                    <div id="more-info-box-partner">
                        <p className="h3w">There's more events hosted by our Big House Partners!</p>
                        <a href="https://bighouse.org.uk/events" className="btn btn-primary h2w">Partner Events</a>
                    </div>
                    <div id="more-info-box-event">
                        <p className="h3w">
                            {props.previousEvents ? "See some of our past events!" : "See some of our current events!"}
                        </p>

                        <Link to={props.previousEvents ? "/events" : "/pastevents" } className="btn btn-secondary h2w">
                            {props.previousEvents ? "Current Events" : "Past Events"}
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default ShowAllEventCards;