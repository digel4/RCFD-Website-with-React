import React, { useEffect } from "react";
import { fetchCurrEvents } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IndividualEventCard from '../events/eventCards/IndividualEventCard';
            
            

const LandingEventsSlider = (props) => {
    const { fetchCurrEvents, currEvents } = props

    useEffect( () => {
        fetchCurrEvents()
    }, [] );

    const renderList = () => {
        return currEvents.map( event => {
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

    if (!currEvents) {
        return (
            <p className="h3-black">
                Loading
            </p>
        )
    } else if (currEvents.length > 0) {
        return (
            <div id="events-gallery-container">
                <div>
                    <Link to="/events" className="btn btn-primary my-4">Events & Workshops</Link>
                </div>
                <div className="events-gallery">
                    <div className="row">
                        {renderList()}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <p className="h3-black">
                There is no upcoming events. Please check again soon!
            </p>
        )
    }
}

const mapStateToProps = state => {
    return {
        currEvents: state.events.currEvents
    }
  }
  
  export default connect(
    mapStateToProps,
    { fetchCurrEvents }
  )(LandingEventsSlider);