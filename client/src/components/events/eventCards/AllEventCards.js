import IndividualEventCard from "./IndividualEventCard";
import { Link } from 'react-router-dom';

const ShowAllEventCards = (props) => {

    const { eventsList, previousEvents } = props;

    const renderList = () => {
        return eventsList.map( event => {
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
            <div id="events-gallery-container">
                <h1 className="h1-black my-4">
                    <strong>
                    {previousEvents ? "Past Events & Workshops" : "Current Events & Workshops"}
                    </strong>
                </h1>
                <div className="events-gallery">
                    {/* <div className="row"> */}
                        {renderList()}
                    {/* </div> */}
                </div>
            </div>
            <div id="more-info-box-title">
                <h1 className="h1-black"><strong>More Info</strong></h1>
            </div>
                <div id="more-info-box">
                    <div id="more-info-box-partner">
                        <p className="h3-white">There's more events hosted by our Big House Partners!</p>
                        <a href="https://bighouse.org.uk/events" className="btn btn-primary h2-white">Partner Events</a>
                    </div>
                    <div id="more-info-box-event">
                        <p className="h3-white">
                            {previousEvents ? "See some of our past events!" : "See some of our current events!"}
                        </p>

                        <Link to={previousEvents ? "/events" : "/pastevents" } className="btn btn-secondary h2-white">
                            {previousEvents ? "Current Events" : "Past Events"}
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default ShowAllEventCards;